import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { type RequestWithUserAdmin } from './types/request.types';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('admin/auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req: RequestWithUserAdmin) {
    return this.authService.login(req.user);
  }
  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@Request() req: RequestWithUserAdmin) {
    return this.authService.me(req.user);
  }
}
