import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { OrderEntity } from '../order/order.entity';
import { OrderProductDto } from './order-product.dto';
import { OrderProductEntity } from './order-product.entity';
import { OrderProductService } from './order-product.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OrderProductEntity, OrderEntity])],
      resolvers: [
        {
          DTOClass: OrderProductDto,
          EntityClass: OrderProductEntity,
          enableAggregate: true,
        },
      ],
    }),
  ],
  providers: [OrderProductService],
  exports: [OrderProductService],
})
export class OrderProductModule {}
