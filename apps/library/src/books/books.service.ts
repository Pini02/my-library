import { Book } from '@app/connection/entities/book.entity';
import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {}

  getBooks() {
    return this.dataSource.getRepository(Book).find();
  }
}
