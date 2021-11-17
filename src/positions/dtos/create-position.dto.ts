import { IsString, IsNumber } from 'class-validator';

export class CreatePositionDto {
  @IsString()
  position: string;

  @IsNumber()
  salary: number;

  @IsString()
  skills: string;

  @IsString()
  status: string;

  @IsString()
  requirements: string;

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;

  @IsString()
  customerId: string;
}
