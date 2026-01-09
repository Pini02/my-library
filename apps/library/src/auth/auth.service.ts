import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '@app/connection/entities/users.entity';
import { JwtService } from '@nestjs/jwt';
import { RentService } from '../rent/rent.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
    private rentService: RentService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) return null;
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return null;
    return user;
  }

  async login(user: User) {
    const payload = {
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      rented: this.rentService.getByUserId(user.id),
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async profile(user: User) {
    const payload = {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      rented: await this.rentService.getByUserId(user.id),
    };
    return payload;
  }
}
