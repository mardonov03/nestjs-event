import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { DatabaseModule } from '../infrostructure/database/database.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
  imports: [DatabaseModule],
})
export class AuthModule {}
