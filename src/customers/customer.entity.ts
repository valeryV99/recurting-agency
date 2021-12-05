import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Position } from '../positions/position.entity';
import { Recruiter } from '../recruiters/recruiter.entity';;

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customerName: string;

  @Column()
  address: string;

  @OneToMany(() => Position, (position) => position.customer)
  positions: Position[];

  @ManyToMany(() => Recruiter)
  @JoinTable()
  recruiters: Recruiter[];
}
