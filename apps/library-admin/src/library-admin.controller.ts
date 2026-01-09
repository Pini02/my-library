import { Controller, Get } from '@nestjs/common';
import { LibraryAdminService } from './library-admin.service';

@Controller()
export class LibraryAdminController {
  constructor(private readonly libraryAdminService: LibraryAdminService) {}

  @Get()
  getHello(): string {
    return this.libraryAdminService.getHello();
  }
}
