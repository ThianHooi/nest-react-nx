import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginUserInput } from './login-input.dto';
import { LoginResponse } from './login-response.dto';

@Resolver(() => LoginResponse)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  login(@Args('input') loginUserInput: LoginUserInput): Promise<LoginResponse> {
    return this.authService.login(loginUserInput);
  }
}
