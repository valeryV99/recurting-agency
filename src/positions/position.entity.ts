import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Interview } from '../interviews/interview.entity';
import { Customer } from '../customers/customer.entity';
import { Candidate } from '../candidates/candidate.entity';

@Entity()
export class Position {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  position: string;

  @Column()
  salary: number;

  @Column()
  skills: string;

  @Column()
  status: number;

  @Column()
  requirements: string;

  @Column()
  date_of_creation: Date;

  @OneToMany(() => Interview, (interview) => interview.candidate)
  interview: Interview[];

  @ManyToOne(() => Customer, (customer) => customer.positions)
  customer: Customer;

  @ManyToMany(() => Candidate)
  @JoinTable()
  candidates: [Candidate];

  @Column()
  customerId: string;
}
