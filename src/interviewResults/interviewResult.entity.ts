import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Interview } from '../interviews/interview.entity';

@Entity()
export class InterviewResult {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  rating: number;

  @Column()
  sociability: number;

  @Column()
  teamwork: number;

  @Column()
  attentionToDetail: number;

  @Column()
  selfMotivation: number;

  @OneToOne(() => Interview)
  @JoinColumn()
  interview: Interview;

  @Column('uuid')
  interviewId: string;
}
