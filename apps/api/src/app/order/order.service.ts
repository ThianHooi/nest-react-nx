import {
  AssemblerQueryService,
  InjectQueryService,
  QueryService,
} from '@nestjs-query/core';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OrderProductInput } from '../order-product/order-product-input.dto';
import { OrderProductDto } from '../order-product/order-product.dto';
import { OrderProductService } from '../order-product/order-product.service';
import { UserService } from '../user/user.service';
import { OrderInputDto } from './order-input.dto';
import { OrderAssembler } from './order.assembler';
import { OrderDto } from './order.dto';
import { OrderEntity } from './order.entity';

interface PriceValues {
  orderItems: OrderProductInput[];
  orderTotalPrice: number;
}

@Injectable()
@QueryService(OrderDto)
export class OrderService extends AssemblerQueryService<OrderDto, OrderEntity> {
  constructor(
    readonly assembler: OrderAssembler,
    @InjectQueryService(OrderEntity)
    private readonly service: QueryService<OrderEntity>,
    private readonly userService: UserService,
    private readonly orderProductService: OrderProductService,
  ) {
    super(assembler, service);
  }

  /**
   * Calculate total price for each order item and the total price of the order
   * @param {[OrderProductInput]} itemArr
   * @returns {PriceValues}
   */
  calculateItemTotalPrice(itemArr: OrderProductInput[]): PriceValues {
    let orderTotalPrice = 0;

    const orderItems = itemArr.map((item) => {
      const { quantity, unitPrice } = item;

      const itemTotalprice = quantity * unitPrice;
      item.totalPrice = itemTotalprice;
      orderTotalPrice += itemTotalprice;
      return item;
    });

    return {
      orderItems,
      orderTotalPrice,
    };
  }

  async createOrder(input: OrderInputDto): Promise<OrderEntity> {
    const { user } = input;
    const { orderItems } = input;

    const buyer = await this.userService.findOneUserById(user);

    if (!buyer) {
      throw new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
    }

    const { orderItems: newOrderItems, orderTotalPrice } =
      this.calculateItemTotalPrice(orderItems);

    const order = await this.service.createOne({
      user: buyer,
      price: orderTotalPrice,
    });

    const orderProducts = newOrderItems.map((i) => {
      const { productId, unitPrice, quantity, totalPrice } = i;
      const newItem = new OrderProductDto();

      newItem.productId = productId;
      newItem.unitPrice = unitPrice;
      newItem.quantity = quantity;
      newItem.totalPrice = totalPrice;
      newItem.orderId = order.id;
      return newItem;
    });

    await this.orderProductService.createManyProductOrders(orderProducts);

    return order;
  }
}
