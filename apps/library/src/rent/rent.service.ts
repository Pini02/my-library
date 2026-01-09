import { Rent } from '@app/connection/entities/rent.entity';
import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class RentService {
  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {}

  async getByUserId(userId: number) {
    return await this.dataSource.getRepository(Rent).find({
      where: {
        user_id: userId,
      },
    });
  }
}
