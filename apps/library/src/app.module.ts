import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { ConnectionModule } from '@app/connection';

@Module({
  imports: [BooksModule, ConnectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
