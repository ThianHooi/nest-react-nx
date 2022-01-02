import {
  FilterableField,
  IDField,
  PagingStrategies,
  QueryOptions,
  Relation,
} from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, ID } from '@nestjs/graphql';
import { UserDto } from '../user/user.dto';


@ObjectType('Product')
@Relation('user', () => UserDto, { disableRemove: true })
@QueryOptions({
  enableTotalCount: true,
  pagingStrategy: PagingStrategies.OFFSET,
})
export class ProductDto {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  name!: string;

  @FilterableField()
  type!: string;

  @FilterableField()
  description: string;

  @FilterableField()
  price!: number;

  @FilterableField()
  isAvailable!: boolean;

  @FilterableField()
  imageUrl!: string;

  @FilterableField()
  user!: number;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
