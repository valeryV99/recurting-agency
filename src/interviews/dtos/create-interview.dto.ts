import { IsString, IsDateString } from 'class-validator';

export class CreateInterviewDto {
  @IsString()
  candidateId: string;
  @IsDateString()
  date: Date;
}
