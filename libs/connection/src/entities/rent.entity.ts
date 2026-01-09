import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './users.entity';
import { Book } from './book.entity';

@Entity('rent')
export class Rent {
  @ManyToOne(() => User)
  @JoinColumn({ name: 'id' })
  user: User;

  @Column()
  user_id: string;

  @ManyToOne(() => Book)
  @JoinColumn({ name: 'isbn' })
  book: Book;

  @Column()
  isbn: string;

  @Column()
  start_date: string;

  @Column()
  end_date: string;
}
