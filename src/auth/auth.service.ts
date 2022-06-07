import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/enteties/user.entity';
import { UsersService } from 'src/users/users.service';
import { jwtSecret } from './constants';
import { LoginUserInput } from './dto/login-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(email: string, password: string): Promise<User> {
    const user = this.usersService.getUserByEmail(email);

    const valid = await bcrypt.compare(password, user?.password);

    if (user && valid) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  verify(token: string): User {
    const decoded = this.jwtService.verify(token, { secret: jwtSecret });

    const user = this.usersService.getUserByEmail(decoded.email);

    return user;
  }

  login(user: User) {
    const payload = {
      email: user.email,
      sub: user.userId,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async signUp(loginUserInput: LoginUserInput) {
    const user = this.usersService.getUserByEmail(loginUserInput.email);

    if (user) {
      throw new Error('User already exists');
    }

    const password = await bcrypt.hash(loginUserInput.password, 10);

    return this.usersService.create({ ...loginUserInput, password });
  }
}
