import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { OrderEntity } from '../order/order.entity';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';
import { UserInputDto } from './user.inputdto';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([UserEntity, OrderEntity])],
      dtos: [
        {
          DTOClass: UserDto,
          CreateDTOClass: UserInputDto,
          UpdateDTOClass: UserInputDto,
        },
      ],
    }),
  ],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
