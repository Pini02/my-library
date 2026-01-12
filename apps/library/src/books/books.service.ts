import { Book } from '@app/connection/entities/book.entity';
import { Inject, Injectable } from '@nestjs/common';
import { DataSource, ILike } from 'typeorm';
import { BooksWhere } from './types/books-where';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class BooksService {
  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {}

  async getBooks(filters: BooksWhere, pagination: PaginationDto) {
    const [data, total] = await this.dataSource
      .getRepository(Book)
      .findAndCount({
        take: pagination.limit,
        skip: pagination.offset,
        where: {
          title: ILike(`%${filters.title || ''}%`),
          isbn: ILike(`%${filters.isbn || ''}%`),
        },
      });
    return {
      data: data,
      pagination: {
        elements: pagination.limit,
        total: total,
        offset: pagination.offset,
        nextPage:
          total > pagination.offset + pagination.limit
            ? pagination.limit + pagination.offset
            : null,
      },
    };
  }
  async rentBook(isbn: string) {
    const book = await this.dataSource.getRepository(Book).findOne({
      where: {
        isbn: isbn,
      },
    });
    if (book && book.quantity > 0) {
      return await this.dataSource
        .getRepository(Book)
        .update({ isbn: isbn }, { quantity: book.quantity - 1 });
    }
    return null;
  }
}
