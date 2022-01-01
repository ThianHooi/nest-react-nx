import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateUserInput')
export class UserInputDto {
  @FilterableField()
  name!: string;

  @FilterableField()
  role!: string;

  @FilterableField()
  email!: string;

  @Field()
  password!: string;
}
