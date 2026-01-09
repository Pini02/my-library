import { User } from '@app/connection/entities/users.entity';
import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: User;
}
