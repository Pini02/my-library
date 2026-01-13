import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BooksService } from '../books/books.service';
import { Rent } from '@app/connection/entities/rent.entity';
import { CreateRentDto } from './dto/create-rent.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class RentService {
  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource,
    private booksService: BooksService,
    private userService: UsersService,
  ) {}

  async rentBook(createRentDto: CreateRentDto) {
    const book = await this.booksService.findOne(createRentDto.isbn);
    const user = await this.userService.findOne(createRentDto.user_id);
    if (!book || !user) throw new NotFoundException();
    if (book.quantity < 1) return null;
    await this.booksService.update(createRentDto.isbn, {
      quantity: book.quantity - 1,
    });
    return this.dataSource.getRepository(Rent).insert(createRentDto);
  }

  async returnBook(userId: number, isbn: string) {
    const rent = await this.dataSource.getRepository(Rent).findOne({
      where: {
        user_id: userId,
        isbn: isbn,
      },
    });
    if (!rent) throw new NotFoundException();
    const book = await this.booksService.findOne(rent.isbn);
    if (!book) throw new NotFoundException();

    await this.booksService.update(isbn, {
      quantity: book.quantity + 1,
    });
    return this.dataSource.getRepository(Rent).delete({
      user_id: userId,
      isbn: isbn,
    });
  }
}
