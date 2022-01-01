import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserInputDto } from './user.inputdto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) {}

  async createUser(input: UserInputDto): Promise<UserEntity> {
    const { email } = input;

    const existingUsers = await this.findOneUserByEmail(email);

    if (existingUsers) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }

    const saltOrRounds = 10;
    const { password } = input;
    const hash = await bcrypt.hash(password, saltOrRounds);

    input.password = hash;
    const newUser = this.usersRepository.create(input);

    return this.usersRepository.save(newUser);
  }

  async findOneUserByEmail(email: string): Promise<UserEntity> {
    const user = this.usersRepository.findOne({ email });
    return user;
  }

  async findOneUserById(id: number): Promise<UserEntity> {
    const user = this.usersRepository.findOne({ id });
    return user;
  }
}
