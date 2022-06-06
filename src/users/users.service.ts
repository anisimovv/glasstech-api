import { Injectable } from '@nestjs/common';
import { User } from './enteties/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      userId: '1',
      email: 'kirill@mail.com',
      password: '123455',
    },
  ];

  getUser() {
    return { userId: '123', email: 'asdfasdf', password: 'asdfasdf' };
  }

  getUserByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
}
