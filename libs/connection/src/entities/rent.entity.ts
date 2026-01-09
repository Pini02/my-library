import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from './users.entity';
import { Book } from './book.entity';

@Entity('rents')
export class Rent {
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  @PrimaryColumn()
  user_id: number;

  @ManyToOne(() => Book)
  @JoinColumn({ name: 'isbn' })
  book: Book;

  @Column()
  @PrimaryColumn()
  isbn: string;

  @Column()
  start_date: string;

  @Column()
  end_date: string;
}
