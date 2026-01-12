import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { type RequestWithUser } from './types/request.types';
import { LocalAuthGuard } from './local-auth.guard';
import { type CreateUserDto } from '../users/dto/create-user.schema';
import { type UpdateUserDto } from '../users/dto/update-user.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req: RequestWithUser) {
    return this.authService.login(req.user);
  }

  @Get('me')
  @UseGuards(LocalAuthGuard)
  async me(@Request() req: RequestWithUser) {
    return await this.authService.profile(req.user);
  }

  @Post('register')
  async register(@Body() newUser: CreateUserDto) {
    return await this.authService.register(newUser);
  }

  @UseGuards(LocalAuthGuard)
  @Delete('me')
  async delete(@Request() req: RequestWithUser) {
    return await this.authService.delete(req.user.id);
  }

  @UseGuards(LocalAuthGuard)
  @Patch('me')
  async update(
    @Request() req: RequestWithUser,
    @Body() updated: UpdateUserDto,
  ) {
    return await this.authService.update(req.user.id, updated);
  }
}
