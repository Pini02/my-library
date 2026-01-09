import { Injectable } from '@nestjs/common';

@Injectable()
export class LibraryAdminService {
  getHello(): string {
    return 'Hello World!';
  }
}
