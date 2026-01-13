import { UserAdmin } from '@app/connection/entities/user_admin.entity';
import { Request } from 'express';

export interface RequestWithUserAdmin extends Request {
  user: UserAdmin;
}
