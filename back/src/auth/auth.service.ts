import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user._id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: payload,
    };
  }

  async signUp(name: string, email: string, pass: string): Promise<any> {
    const user = await this.usersService.createUser({
      email,
      name,
      password: pass,
    });
    const payload = { sub: user._id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: payload,
    };
  }
}
