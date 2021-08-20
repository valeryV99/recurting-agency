import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Candidate } from '../candidates/candidate.entity';

@Entity()
export class Interview {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  candidateId: string;

  @Column('timestamp', {
    name: 'date',
    default: (): string => 'LOCALTIMESTAMP',
  })
  date?: Date;

  @ManyToOne(() => Candidate, (candidate) => candidate.interview)
  candidate: Candidate;
}
