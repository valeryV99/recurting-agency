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
  attention_to_detail: number;

  @Column()
  self_motivation: number;

  @OneToOne(() => Interview)
  @JoinColumn()
  interview: Interview;

  @Column('uuid')
  interviewId: string;
}
