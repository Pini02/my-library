import { Module } from '@nestjs/common';
import { RentService } from './rent.service';
import { RentController } from './rent.controller';
import { ConnectionModule } from '@app/connection';
import { BooksService } from '../books/books.service';
import { UsersService } from '../users/users.service';

@Module({
  imports: [ConnectionModule],
  controllers: [RentController],
  providers: [RentService, BooksService, UsersService],
})
export class RentModule {}
