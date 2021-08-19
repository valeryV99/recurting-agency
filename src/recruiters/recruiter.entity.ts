import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Candidate } from '../candidates/candidate.entity';

@Entity()
export class Recruiter {
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
  residence_address: string;

  @Column()
  education: string;

  @Column()
  position: string;

  @OneToMany(() => Candidate, (candidate) => candidate.recruiter)
  candidates: Candidate[];
}
