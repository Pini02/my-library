import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ConnectionModule } from '@app/connection';

@Module({
  imports: [ConnectionModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
