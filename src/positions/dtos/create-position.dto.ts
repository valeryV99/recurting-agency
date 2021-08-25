import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreatePositionDto {
  @IsString()
  position: string;

  @IsNumber()
  salary: number;

  @IsString()
  skills: string;

  @IsNumber()
  status: number;

  @IsString()
  requirements: string;

  @IsDateString()
  date_of_creation: Date;

  @IsString()
  customerId: string;
}
