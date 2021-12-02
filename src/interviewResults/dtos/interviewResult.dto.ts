import { Expose } from 'class-transformer';

export class InterviewResultDto {
  @Expose()
  id: string;
  @Expose()
  rating: number;
  @Expose()
  sociability: number;
  @Expose()
  teamwork: number;
  @Expose()
  attentionToDetail: number;
  @Expose()
  selfMotivation: number;

  @Expose()
  interviewId: string;
}
