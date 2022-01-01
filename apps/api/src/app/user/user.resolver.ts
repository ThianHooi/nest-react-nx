import { QueryService, InjectQueryService } from '@nestjs-query/core';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';
import { UserInputDto } from './user.inputdto';
import { UserService } from './user.service';

@Resolver(() => UserDto)
export class UserResolver extends CRUDResolver(UserDto, {
  create: { one: { disabled: true }, many: { disabled: true } },
  update: { many: { disabled: true } },
  delete: { many: { disabled: true } },
  guards: [JwtAuthGuard],
}) {
  constructor(
    @InjectQueryService(UserEntity)
    readonly service: QueryService<UserEntity>,
    readonly userService: UserService,
  ) {
    super(service);
  }

  @Mutation(() => UserDto)
  @UseGuards(JwtAuthGuard)
  createUser(@Args('input') input: UserInputDto): Promise<UserEntity> {
    return this.userService.createUser(input);
  }
}
