import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
