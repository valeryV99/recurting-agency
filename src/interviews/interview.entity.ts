import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Candidate } from '../candidates/candidate.entity';
import { Position } from '../positions/position.entity';

@Entity()
export class Interview {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  candidateId: string;

  @Column('uuid')
  positionId: string;

  @Column()
  interviewDate: string;

  @Column()
  rating: number;

  @Column()
  sociability: number;

  @Column()
  teamwork: number;

  @Column()
  attentionToDetails: number

  @Column()
  selfMotivation: number

  @ManyToOne(() => Candidate, (candidate) => candidate.interview)
  candidate: Candidate;

  @ManyToOne(() => Position, (interview) => interview.position)
  interview: Position[];
}
