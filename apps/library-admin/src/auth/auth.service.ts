import { Injectable } from '@nestjs/common';
import { UsersAdminService } from '../users-admin/users-admin.service';
import * as bcrypt from 'bcrypt';
import { type LoginDto } from './dto/login.schema';
import { JwtService } from '@nestjs/jwt';
import { UserAdmin } from '@app/connection/entities/user_admin.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersAdminService: UsersAdminService,
    private jwtService: JwtService,
  ) {}

  async signIn(login: LoginDto) {
    const user = await this.usersAdminService.findByEmail(login.email);
    if (!user) return null;
    const isValid = await bcrypt.compare(login.password, user.password);
    if (!isValid) return null;
    return user;
  }
  async login(user: UserAdmin) {
    const payload = {
      sub: user.id,
      email: user.email,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  me(user: UserAdmin) {
    const payload = {
      id: user.id,
      email: user.email,
    };
    return payload;
  }
}
