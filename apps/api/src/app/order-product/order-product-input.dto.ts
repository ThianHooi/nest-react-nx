import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OrderProductInput {
  @Field()
  quantity!: number;

  @Field()
  unitPrice!: number;

  @Field()
  productId!: number;

  @Field({ nullable: true })
  totalPrice: number;
}
