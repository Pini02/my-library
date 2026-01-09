import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('book')
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
