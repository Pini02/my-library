import { Test, TestingModule } from '@nestjs/testing';
import { LibraryAdminController } from './library-admin.controller';
import { LibraryAdminService } from './library-admin.service';

describe('LibraryAdminController', () => {
  let libraryAdminController: LibraryAdminController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LibraryAdminController],
      providers: [LibraryAdminService],
    }).compile();

    libraryAdminController = app.get<LibraryAdminController>(LibraryAdminController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(libraryAdminController.getHello()).toBe('Hello World!');
    });
  });
});
