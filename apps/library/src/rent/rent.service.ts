import { Rent } from '@app/connection/entities/rent.entity';
import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateRentDto } from '../auth/dto/create-rent.schema';
import { BooksService } from '../books/books.service';

@Injectable()
export class RentService {
  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource,
    private bookService: BooksService,
  ) {}

  async getByUserId(userId: number) {
    return await this.dataSource.getRepository(Rent).find({
      where: {
        user_id: userId,
      },
    });
  }
  async rentBook(userId: number, rentData: CreateRentDto) {
    if (rentData.end_date && (await this.bookService.rentBook(rentData.isbn))) {
      const newRent = {
        user_id: userId,
        isbn: rentData.isbn,
        start_date: new Date().toISOString().split('T')[0],
        end_date: rentData.end_date,
      };
      return await this.dataSource.getRepository(Rent).insert(newRent);
    }
    return null;
  }
}
