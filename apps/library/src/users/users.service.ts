import { User } from '@app/connection/entities/users.entity';
import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
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
}
