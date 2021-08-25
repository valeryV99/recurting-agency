import { Expose, Transform } from 'class-transformer';

export class InterviewDto {
  @Expose()
  id: string;
  @Expose()
  date: Date;

  @Transform(({ obj }) => obj.candidateId)
  @Expose()
  candidateId: string;

  @Transform(({ obj }) => obj.positionId)
  @Expose()
  positionId: string;
}
