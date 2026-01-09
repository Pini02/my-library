import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from './users.entity';
import { Book } from './book.entity';

@Entity('rent')
export class Rent {
  @ManyToOne(() => User)
  @JoinColumn({ name: 'id' })
  user: User;

  @Column()
  @PrimaryColumn()
  user_id: string;

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
