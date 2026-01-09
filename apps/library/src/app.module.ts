import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConnectionModule } from '@app/connection';
import { RentController } from './rent/rent.controller';
import { RentService } from './rent/rent.service';
import { RentModule } from './rent/rent.module';

@Module({
  imports: [BooksModule, UsersModule, AuthModule, ConnectionModule, RentModule],
  controllers: [AppController, RentController],
  providers: [AppService, UsersService, RentService],
})
export class AppModule {}
