import { IsNumber, IsString } from 'class-validator';

export class CreateInterviewResultDto {
  @IsNumber()
  rating: number;

  @IsNumber()
  sociability: number;

  @IsNumber()
  teamwork: number;

  @IsNumber()
  attention_to_detail: number;

  @IsNumber()
  self_motivation: number;

  @IsString()
  interviewId: string;
}
