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
  attention_to_detail: number;
  @Expose()
  self_motivation: number;

  @Expose()
  interviewId: string;
}
