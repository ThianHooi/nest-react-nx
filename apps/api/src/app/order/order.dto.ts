import {
  FilterableField,
  FilterableUnPagedRelation,
  IDField,
  PagingStrategies,
  QueryOptions,
  Relation,
} from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, ID } from '@nestjs/graphql';
import { OrderProductDto } from '../order-product/order-product.dto';
import { UserDto } from '../user/user.dto';

@ObjectType('Order')
@Relation('user', () => UserDto, { disableRemove: true })
@FilterableUnPagedRelation('orderProducts', () => OrderProductDto, {
  disableRemove: true,
})
@QueryOptions({
  enableTotalCount: true,
  pagingStrategy: PagingStrategies.OFFSET,
})
export class OrderDto {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  status!: string;

  @FilterableField()
  user!: number;

  @FilterableField()
  price: number;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
