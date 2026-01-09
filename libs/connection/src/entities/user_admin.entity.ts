import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('userAdmin')
export class UserAdmin {
  @PrimaryColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
