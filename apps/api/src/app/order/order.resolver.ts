import { CRUDResolver } from '@nestjs-query/query-graphql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { OrderInputDto } from './order-input.dto';
import { OrderDto } from './order.dto';
import { OrderEntity } from './order.entity';
import { OrderService } from './order.service';

@Resolver(() => OrderDto)
export class OrderResolver extends CRUDResolver(OrderDto, {
  create: { one: { disabled: true } },
  update: { one: { disabled: true }, many: { disabled: true } },
  delete: { one: { disabled: true }, many: { disabled: true } },
  guards: [JwtAuthGuard],
}) {
  constructor(readonly orderService: OrderService) {
    super(orderService);
  }

  @Mutation(() => OrderDto)
  createOrder(@Args('input') input: OrderInputDto): Promise<OrderEntity> {
    return this.orderService.createOrder(input);
  }
}
