import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async login(loginUserDto: LoginUserDto) {
    const userInDb = await this.userRepository.findByCondition({
      email: loginUserDto.email,
    });

    if (!userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const isPasswordValid = await bcrypt.compare(
      loginUserDto.password,
      userInDb.password,
    );

    if (!isPasswordValid) {
      throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
    }

    return userInDb;
  }

  async create(userDto: CreateUserDto): Promise<any> {
    const userInDb = await this.userRepository.findByCondition({
      email: userDto.email,
    });

    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    userDto.password = await bcrypt.hash(userDto.password, 10);

    return await this.userRepository.create(userDto);
  }

  async findbyEmail(email: string) {
    return await this.userRepository.findByCondition({ email });
  }
}
