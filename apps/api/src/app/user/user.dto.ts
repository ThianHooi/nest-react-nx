import {
  FilterableField,
  FilterableUnPagedRelation,
  IDField,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, ID } from '@nestjs/graphql';
import { ProductDto } from '../product/product.dto';


@ObjectType('User')
@FilterableUnPagedRelation('products', () => ProductDto, {
  disableRemove: true,
})
@QueryOptions({ defaultResultSize: 10 })
export class UserDto {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  name!: string;

  @FilterableField()
  role!: string;

  @FilterableField()
  email!: string;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
