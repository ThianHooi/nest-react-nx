import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { OrderEntity } from '../order/order.entity';

import { ProductDto } from './product.dto';
import { ProductEntity } from './product.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductEntity, OrderEntity])],

      resolvers: [
        {
          DTOClass: ProductDto,
          EntityClass: ProductEntity,
          guards: [JwtAuthGuard],
        },
      ],
    }),
  ],
})
export class ProductModule {}
