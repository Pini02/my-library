import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { type CreateBookDto } from './dto/create-book.dto';
import { type UpdateBookDto } from './dto/update-book.dto';
import { LocalAuthGuard } from '../auth/local-auth.guard';

@Controller('admin/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @UseGuards(LocalAuthGuard)
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @UseGuards(LocalAuthGuard)
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':isbn')
  @UseGuards(LocalAuthGuard)
  findOne(@Param('isbn') isbn: string) {
    return this.booksService.findOne(isbn);
  }

  @Patch(':isbn')
  @UseGuards(LocalAuthGuard)
  update(@Param('isbn') isbn: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(isbn, updateBookDto);
  }

  @Delete(':isbn')
  @UseGuards(LocalAuthGuard)
  remove(@Param('isbn') isbn: string) {
    return this.booksService.remove(isbn);
  }
}
