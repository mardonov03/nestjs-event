import { Injectable } from '@nestjs/common';
import { DtoSignUp } from './dto/dto.signUp';
import { UsersService } from '../users/users.service';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
  constructor(
    private readonly userservice: UsersService,
    private readonly mailer: MailerService,
  ) {}

  async signUp(dto: DtoSignUp) {
    const mail = dto.mail;
    const user = await this.userservice.getUserByMail(mail);

    if (user && user.verify) {
      return 'есть в базе данных и верефицирован (test)';
    }
    if (
      user &&
      Date.now() - new Date(user.created_at).getTime() < 2 * 60 * 1000
    ) {
      return 'еще не прошло 2 минуты';
    }
    await this.sendMail(dto.mail);
    return await this.userservice.addUser(dto.mail, dto.password);
  }
  async sendMail(mail: string) {
    await this.mailer.sendMail({
      to: mail,
      subject: 'test',
      text: 'test text',
    });
  }
}
