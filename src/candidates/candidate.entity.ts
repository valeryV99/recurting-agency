import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recruiter } from '../recruiters/recruiter.entity';
import { Interview } from '../interviews/interview.entity';


@Entity()
export class Candidate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  recruiterId

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
  skills: string;

  @Column()
  desiredSalary: number

  @Column('uuid')
  possiblePosition: string;

  @Column()
  status: string;

  @ManyToOne(() => Recruiter, (recruiter) => recruiter.candidates)
  recruiter: Recruiter;

  @OneToMany(() => Interview, (interview) => interview.candidate)
  interview: Interview[];
}
