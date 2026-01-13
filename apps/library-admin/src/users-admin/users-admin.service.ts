import { Inject, Injectable } from '@nestjs/common';
import { CreateUsersAdminDto } from './dto/create-users-admin.dto';
import { DataSource } from 'typeorm';
import { UserAdmin } from '@app/connection/entities/user_admin.entity';

@Injectable()
export class UsersAdminService {
  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {}
  create(createUsersAdminDto: CreateUsersAdminDto) {
    return this.dataSource.getRepository(UserAdmin).insert(createUsersAdminDto);
  }

  findAll() {
    return this.dataSource.getRepository(UserAdmin).find();
  }

  findOne(id: number) {
    return this.dataSource.getRepository(UserAdmin).findOne({
      where: {
        id: id,
      },
    });
  }

  findByEmail(email: string) {
    return this.dataSource.getRepository(UserAdmin).findOne({
      where: {
        email: email,
      },
    });
  }

  remove(id: number) {
    return this.dataSource.getRepository(UserAdmin).delete({ id: id });
  }
}
