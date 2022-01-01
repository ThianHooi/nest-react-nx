import { CRUDResolver } from '@nestjs-query/query-graphql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { OrderInputDto } from './order-input.dto';
import { OrderDto } from './order.dto';
import { OrderEntity } from './order.entity';
import { OrderService } from './order.service';

@Resolver(() => OrderDto)
export class OrderResolver extends CRUDResolver(OrderDto) {
  constructor(readonly orderService: OrderService) {
    super(orderService);
  }

  @Mutation(() => OrderDto)
  createOrder(@Args('input') input: OrderInputDto): Promise<OrderEntity> {
    return this.orderService.createOrder(input);
  }
}
