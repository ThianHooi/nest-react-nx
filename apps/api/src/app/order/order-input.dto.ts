import { Field, InputType } from '@nestjs/graphql';
import { OrderProductInput } from '../order-product/order-product-input.dto';


@InputType()
export class OrderInputDto {
  @Field()
  user!: number;

  @Field(() => [OrderProductInput], { nullable: true })
  orderItems: OrderProductInput[];
}
