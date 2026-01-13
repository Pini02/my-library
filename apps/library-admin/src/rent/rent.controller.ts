import {
  Controller,
  Delete,
  Param,
  UseGuards,
  Post,
  Body,
} from '@nestjs/common';
import { RentService } from './rent.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { type CreateRentDto } from './dto/create-rent.schema';

@Controller('admin/rent')
export class RentController {
  constructor(private readonly rentService: RentService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  rentBook(@Body() createRentDto: CreateRentDto) {
    return this.rentService.rentBook(createRentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':userId/:isbn')
  returnBook(@Param() params: { userId: number; isbn: string }) {
    return this.rentService.returnBook(params.userId, params.isbn);
  }
}
