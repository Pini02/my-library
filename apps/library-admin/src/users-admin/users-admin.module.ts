import { Module } from '@nestjs/common';
import { UsersAdminService } from './users-admin.service';
import { ConnectionModule } from '@app/connection';

@Module({
  imports: [ConnectionModule],
  providers: [UsersAdminService],
  exports: [UsersAdminService],
})
export class UsersAdminModule {}
