import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DtoSignUp } from './dto/dto.signUp';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() dto: DtoSignUp) {
    return this.authService.signUp(dto);
  }
}
