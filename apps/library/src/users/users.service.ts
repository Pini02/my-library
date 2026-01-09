import { User } from '@app/connection/entities/users.entity';
import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateUserDto } from './dto/create-user.schema';
@Injectable()
export class UsersService {
  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {}

  async findByEmail(email: string) {
    const user = await this.dataSource.getRepository(User).findOne({
      where: {
        email: email,
      },
    });
    return user;
  }
  async createUser(user: CreateUserDto) {
    return await this.dataSource.getRepository(User).insert(user);
  }
}
