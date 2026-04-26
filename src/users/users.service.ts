import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';
import { TypesUser } from './users.types';

@Injectable()
export class UsersService {
  constructor(private readonly userrepository: UsersRepository) {}
  async getUserByMail(mail: string): Promise<TypesUser | null> {
    return this.userrepository.getUserByMail(mail);
  }
  async addUser(mail: string, password: string) {
    return await this.userrepository.addUser(mail, password);
  }
}
