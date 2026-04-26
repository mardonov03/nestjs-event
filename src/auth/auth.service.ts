import { Injectable } from '@nestjs/common';
import { DtoSignUp } from './dto/dto.signUp';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userservice: UsersService) {}
  async signUp(dto: DtoSignUp) {
    const mail = dto.mail;
    const user = await this.userservice.getUserByMail(mail);

    if (user && user.verify) {
      return 'есть в базе данных и верефицирован (test)';
    }
    if (
      user &&
      Date.now() - new Date(user.createdAt).getTime() < 2 * 60 * 1000
    ) {
      return 'еще не прошло 2 минуты';
    }
    return 'туту пройдет регистрация';
  }
}
