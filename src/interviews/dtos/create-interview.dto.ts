import { IsString } from 'class-validator';

export class CreateInterviewDto {
  @IsString()
  candidateId: string;

  @IsString()
  positionId: string;

  @IsString()
  interviewDate: string;
}
