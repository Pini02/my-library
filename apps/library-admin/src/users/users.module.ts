import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ConnectionModule } from '@app/connection';

@Module({
  imports: [ConnectionModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
