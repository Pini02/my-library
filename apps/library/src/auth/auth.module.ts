import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { ConnectionModule } from '@app/connection';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { RentService } from '../rent/rent.service';
import { BooksService } from '../books/books.service';

@Module({
  imports: [
    ConnectionModule,
    JwtModule.register({
      secret: '1234567890',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    AuthService,
    AuthModule,
    UsersService,
    RentService,
    BooksService,
    LocalStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
