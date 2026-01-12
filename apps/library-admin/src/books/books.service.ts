import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { DataSource } from 'typeorm';
import { Book } from '@app/connection/entities/book.entity';

@Injectable()
export class BooksService {
  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {}

  create(createBookDto: CreateBookDto) {
    return this.dataSource.getRepository(Book).insert(createBookDto);
  }

  async findAll() {
    return this.dataSource.getRepository(Book).find();
  }

  findOne(isbn: string) {
    return this.dataSource.getRepository(Book).findOne({
      where: {
        isbn: isbn,
      },
    });
  }

  update(isbn: string, updateBookDto: UpdateBookDto) {
    return this.dataSource
      .getRepository(Book)
      .update({ isbn: isbn }, updateBookDto);
  }

  remove(isbn: string) {
    return this.dataSource.getRepository(Book).delete({ isbn: isbn });
  }

  async returnBook(isbn: string) {
    const book = await this.findOne(isbn);
    if (!book) return null;
    return this.dataSource
      .getRepository(Book)
      .update({ isbn: isbn }, { quantity: book.quantity + 1 });
  }
}
