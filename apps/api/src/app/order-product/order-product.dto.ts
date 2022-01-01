import {
  FilterableField,
  IDField,
  Relation,
} from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, ID } from '@nestjs/graphql';
import { OrderDto } from '../order/order.dto';
import { ProductDto } from '../product/product.dto';


@ObjectType('OrderProduct')
@Relation('productId', () => ProductDto, { disableRemove: true })
@Relation('orderId', () => OrderDto, { disableRemove: true })
export class OrderProductDto {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  quantity!: number;

  @FilterableField()
  unitPrice!: number;

  @FilterableField()
  totalPrice!: number;

  @FilterableField()
  productId!: number;

  @FilterableField()
  orderId!: number;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
