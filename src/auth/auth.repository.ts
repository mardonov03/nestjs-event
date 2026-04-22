import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from '../infrostructure/database/pg.repository';
import { Pool } from 'pg';
import { DtoSignUp } from './dto/dto.signUp';
import { TypesUser } from './types/types.user';

@Injectable()
export class AuthRepository {
  constructor(@Inject(PG_CONNECTION) private readonly pool: Pool) {}

  async signUp(dto: DtoSignUp) {
    const res = await this.pool.query(
      'INSERT INTO users(mail, password) VALUES($1, $2) RETURNING id, mail, password',
      [dto.mail, dto.password],
    );
    return res.rows[0] as TypesUser;
  }

  async mail_in_db(mail: string): Promise<boolean> {
    const res = await this.pool.query(
      'SELECT 1 FROM users WHERE mail = $1 LIMIT 1',
      [mail],
    );
    return (res.rowCount ?? 0) > 0;
  }
}
