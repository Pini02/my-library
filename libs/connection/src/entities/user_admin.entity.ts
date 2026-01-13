import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('admin_users')
export class UserAdmin {
  @PrimaryColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
