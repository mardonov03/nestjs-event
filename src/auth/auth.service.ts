import { Injectable } from '@nestjs/common';
import { DtoSignUp } from './dto/dto.signUp';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly authrepository: AuthRepository) {}
  async signUp(dto: DtoSignUp) {
    const mail = dto.mail;
    const mail_in_db = await this.authrepository.mail_in_db(mail);
    if (mail_in_db === true) {
      return '';
    }
    return this.authrepository.signUp(dto);
  }
}
