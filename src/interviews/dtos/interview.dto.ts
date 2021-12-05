import { Expose, Transform } from 'class-transformer';
import { Column } from 'typeorm';

export class InterviewDto {
  @Expose()
  id: string;

  @Expose()
  interviewDate: string;

  @Transform(({ obj }) => obj.candidateId)
  @Expose()
  candidateId: string;

  @Transform(({ obj }) => obj.positionId)
  @Expose()
  positionId: string;

  @Expose()
  rating: number;

  @Expose()
  sociability: number;

  @Expose()
  teamwork: number;

  @Expose()
  attentionToDetails: number

  @Expose()
  selfMotivation: number

}
