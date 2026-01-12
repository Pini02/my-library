import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { type BooksWhere } from './types/books-where';
import { PaginationDto } from './dto/pagination.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getBooks(@Query() params: BooksWhere, @Query() pagination: PaginationDto) {
    return this.booksService.getBooks(params, pagination);
  }
}
