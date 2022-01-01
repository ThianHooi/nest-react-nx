import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { OrderProductDto } from './order-product.dto';
import { OrderProductEntity } from './order-product.entity';

export class OrderProductService {
  constructor(
    @InjectQueryService(OrderProductEntity)
    private readonly service: QueryService<OrderProductDto>,
  ) {}

  async createManyProductOrders(
    input: OrderProductDto[],
  ): Promise<OrderProductDto[]> {
    const orderProducts = await this.service.createMany(input);
    return orderProducts;
  }
}
