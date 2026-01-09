import { Module } from '@nestjs/common';
import { LibraryAdminController } from './library-admin.controller';
import { LibraryAdminService } from './library-admin.service';

@Module({
  imports: [],
  controllers: [LibraryAdminController],
  providers: [LibraryAdminService],
})
export class LibraryAdminModule {}
