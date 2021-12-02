import { IsNumber, IsString } from 'class-validator';

export class CreateInterviewResultDto {
  @IsNumber()
  rating: number;

  @IsNumber()
  sociability: number;

  @IsNumber()
  teamwork: number;

  @IsNumber()
  attentionToDetail: number;

  @IsNumber()
  selfMotivation: number;

  @IsString()
  interviewId: string;
}
