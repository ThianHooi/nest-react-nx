import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { LoginUserInput } from './login-input.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneUserByEmail(email);

    if (user && (await bcrypt.compare(user.password, password))) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(loginUserInput: LoginUserInput): Promise<any> {
    const user = await this.userService.findOneUserByEmail(
      loginUserInput.email
    );

    const isPasswordMatch = await bcrypt.compare(
      loginUserInput.password,
      user.password
    );

    if (user && isPasswordMatch) {
      const { password, ...result } = user;
      return {
        access_token: this.jwtService.sign({
          name: user.name,
          sub: user.id,
          role: user.role,
        }),
        user: result,
      };
    }

    throw new UnauthorizedException();
  }
}
