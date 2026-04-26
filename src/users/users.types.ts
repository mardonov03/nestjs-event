import { IsEmail, IsString, IsTimeZone } from 'class-validator';

export class TypesUser {
  id: number;
  @IsEmail()
  mail: string;
  @IsString()
  password: string;
  verify: boolean;
  @IsTimeZone()
  created_at: string;
}
