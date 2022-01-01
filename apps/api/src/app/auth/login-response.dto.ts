import { Field, ObjectType } from '@nestjs/graphql';
import { UserDto } from '../user/user.dto';


@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field(() => UserDto)
  user: UserDto;
}
