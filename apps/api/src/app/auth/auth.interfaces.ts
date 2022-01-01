import { UserEntity } from '../user/user.entity';

export type AuthenticatedUser = Pick<UserEntity, 'id' | 'name' | 'role'>;

export type JwtPayload = {
  sub: number;
  name: string;
  role: string;
};

export type UserContext = {
  req: {
    user: AuthenticatedUser;
  };
};
