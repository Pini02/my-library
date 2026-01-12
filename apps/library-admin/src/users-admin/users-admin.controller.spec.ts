import { Test, TestingModule } from '@nestjs/testing';
import { UsersAdminController } from './users-admin.controller';
import { UsersAdminService } from './users-admin.service';

describe('UsersAdminController', () => {
  let controller: UsersAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersAdminController],
      providers: [UsersAdminService],
    }).compile();

    controller = module.get<UsersAdminController>(UsersAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
