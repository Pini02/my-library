import { Module } from '@nestjs/common';
import { RentService } from './rent.service';
import { ConnectionModule } from '@app/connection';
import { BooksService } from '../books/books.service';

@Module({
  imports: [ConnectionModule],
  providers: [RentService, BooksService],
  exports: [RentService],
})
export class RentModule {}
