import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryColumn()
  isbn: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  quantity: number;
}
