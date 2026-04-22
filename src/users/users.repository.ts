import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from '../infrostructure/database/pg.repository';
import { Pool } from 'pg';
import { getUserInfo } from './users.queries';
import { TypesUser } from './users.types';

@Injectable()
export class UsersRepository {
  constructor(@Inject(PG_CONNECTION) private readonly pool: Pool) {}

  async getUserByMail(mail: string): Promise<TypesUser | null> {
    const res = await this.pool.query<TypesUser>(getUserInfo, [mail]);
    return res.rows[0] || null;
  }
}
