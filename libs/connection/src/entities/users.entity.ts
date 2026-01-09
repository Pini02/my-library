import { Column, Entity } from 'typeorm';

@Entity('Users')
export class User {
  @Column()
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
