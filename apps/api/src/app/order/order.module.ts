import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { OrderProductModule } from '../order-product/order-product.module';
import { UserModule } from '../user/user.module';
import { OrderInputDto } from './order-input.dto';
import { OrderAssembler } from './order.assembler';
import { OrderDto } from './order.dto';
import { OrderEntity } from './order.entity';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';

@Module({
  imports: [
    UserModule,
    OrderProductModule,
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OrderEntity])],
      dtos: [
        {
          DTOClass: OrderDto,
          CreateDTOClass: OrderInputDto,
        },
      ],
    }),
  ],
  providers: [OrderResolver, OrderService, OrderAssembler],
})
export class OrderModule {}
