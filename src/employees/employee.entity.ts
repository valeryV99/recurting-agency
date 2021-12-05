import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  photo: string;

  @Column()
  surname: string;

  @Column()
  name: string;

  @Column()
  patronymic: string;

  @Column()
  birth: string;

  @Column()
  residenceAddress: string;

  @Column()
  education: string;

  @Column()
  position: string;

  @Column()
  salary: number;

  @Column()
  status: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  leavingReason: string;

  @Column()
  customerId: string;
}
