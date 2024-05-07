import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  private readonly users = [
    {
      id: 1,
      username: 'Admin',
      password: bcrypt.hashSync('Admin2024', 10),
    },
  ];

  async findByUsername(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  }
}