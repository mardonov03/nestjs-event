import { IsEmail, IsString, MinLength } from 'class-validator';

export class DtoSignUp {
  @IsEmail()
  mail: string;
  @IsString()
  @MinLength(8)
  password: string;
}
