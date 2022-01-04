import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { OrderEntity } from '../order/order.entity';

import { ProductDto } from './product.dto';
import { ProductEntity } from './product.entity';

const guards = [JwtAuthGuard];

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([ProductEntity, OrderEntity]),
      ],

      resolvers: [
        {
          DTOClass: ProductDto,
          EntityClass: ProductEntity,
          create: { guards, many: { disabled: true } },
          update: { guards, many: { disabled: true } },
          delete: { guards, one: { disabled: true }, many: { disabled: true } },
        },
      ],
    }),
  ],
})
export class ProductModule {}
