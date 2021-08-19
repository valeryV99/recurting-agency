import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Recruiter } from '../recruiters/recruiter.entity';

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn('uuid')
  id: number;

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
  possible_position: string;

  @Column()
  status: string;

  @ManyToOne(() => Recruiter, (recruiter) => recruiter.candidates)
  recruiter: Recruiter;
}
