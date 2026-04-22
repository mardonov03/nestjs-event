import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersRepository } from './users/users.repository';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController, UsersController, AuthController],
  providers: [AppService, UsersService, UsersRepository, AuthService],
})
export class AppModule {}
