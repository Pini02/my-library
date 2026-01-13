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
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('admin/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':isbn')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('isbn') isbn: string) {
    return this.booksService.findOne(isbn);
  }

  @Patch(':isbn')
  @UseGuards(JwtAuthGuard)
  update(@Param('isbn') isbn: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(isbn, updateBookDto);
  }

  @Delete(':isbn')
  @UseGuards(JwtAuthGuard)
  remove(@Param('isbn') isbn: string) {
    return this.booksService.remove(isbn);
  }
}
