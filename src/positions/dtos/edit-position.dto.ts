import { IsString, IsNumber } from 'class-validator';

export class EditPositionDto {
  @IsString()
  id: string;

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
