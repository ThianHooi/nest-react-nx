import {
  FilterableField,
  FilterableUnPagedRelation,
  IDField,
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
export class OrderDto {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  status!: string;

  @FilterableField()
  user!: number;

  @Field()
  price: number;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
