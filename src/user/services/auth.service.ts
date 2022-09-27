import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: CreateUserDto) {
    const user = await this.userService.create(userDto);
    const token = this._createToken(user.email);
    return {
      name : user.name,
      email : user.email,
      ...token,
    };
  }

  async login(userDto: LoginUserDto) {
    const user = await this.userService.login(userDto);
    const token = this._createToken({email: user.email});

    console.log(token);

    return {
      name : user.name,
      email : user.email,
      ...token,
    };
  }

  async validateUser(email : string) {
    const user = await this.userService.findbyEmail(email);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  _createToken({email}) {
    const token = this.jwtService.sign({ email });
    return {
      accessToken: token,
    };
  }
}
