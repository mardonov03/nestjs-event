import { IsEmail, IsString } from 'class-validator';

export class TypesUser {
  id: string;
  @IsEmail()
  mail: string;
  @IsString()
  password: string;
}
