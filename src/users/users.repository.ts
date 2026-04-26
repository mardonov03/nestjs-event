import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from '../infrostructure/database/pg.repository';
import { Pool } from 'pg';
import { addUser, getUserInfo } from './users.queries';
import { TypesUser } from './users.types';

@Injectable()
export class UsersRepository {
  constructor(@Inject(PG_CONNECTION) private readonly pool: Pool) {}

  async getUserByMail(mail: string): Promise<TypesUser | null> {
    const res = await this.pool.query<TypesUser>(getUserInfo, [mail]);
    return res.rows[0] || null;
  }
  async addUser(mail: string, password: string) {
    await this.pool.query(addUser, [mail, password]);
    return 'пользователь добавлен в базу данных';
  }
}
