import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersAdminService } from './users-admin.service';
import { type CreateUsersAdminDto } from './dto/create-users-admin.dto';

@Controller('users-admin')
export class UsersAdminController {
  constructor(private readonly usersAdminService: UsersAdminService) {}

  @Post()
  create(@Body() createUsersAdminDto: CreateUsersAdminDto) {
    return this.usersAdminService.create(createUsersAdminDto);
  }

  @Get()
  findAll() {
    return this.usersAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersAdminService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersAdminService.remove(id);
  }
}
