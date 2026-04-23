import { IsEmail, IsString } from 'class-validator';

export class TypesUser {
  id: number;
  @IsEmail()
  mail: string;
  @IsString()
  password: string;
}
