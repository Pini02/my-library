import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersAdminService } from './users-admin.service';
import { type CreateUsersAdminDto } from './dto/create-users-admin.dto';
import { LocalAuthGuard } from '../auth/local-auth.guard';

@Controller('admin/users-admin')
export class UsersAdminController {
  constructor(private readonly usersAdminService: UsersAdminService) {}

  @Post()
  @UseGuards(LocalAuthGuard)
  create(@Body() createUsersAdminDto: CreateUsersAdminDto) {
    return this.usersAdminService.create(createUsersAdminDto);
  }

  @Get()
  @UseGuards(LocalAuthGuard)
  findAll() {
    return this.usersAdminService.findAll();
  }

  @Get(':id')
  @UseGuards(LocalAuthGuard)
  findOne(@Param('id') id: number) {
    return this.usersAdminService.findOne(id);
  }

  @Delete(':id')
  @UseGuards(LocalAuthGuard)
  remove(@Param('id') id: number) {
    return this.usersAdminService.remove(id);
  }
}
