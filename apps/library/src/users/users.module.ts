import { ConnectionModule } from '@app/connection';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  imports: [ConnectionModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
