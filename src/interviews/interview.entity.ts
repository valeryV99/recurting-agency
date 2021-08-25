import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { Candidate } from '../candidates/candidate.entity';
import { InterviewResult } from '../interviewResults/interviewResult.entity';
import { Position } from '../positions/position.entity';

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

  @ManyToOne(() => Position, (interview) => interview.position)
  interview: Position[];

  @OneToOne(() => InterviewResult)
  interview_result: InterviewResult;
}
