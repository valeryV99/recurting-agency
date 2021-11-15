import { Expose } from 'class-transformer';

export class PositionDto {
  @Expose()
  id: string;

  @Expose()
  position: string;

  @Expose()
  salary: number;

  @Expose()
  skills: string;

  @Expose()
  status: number;

  @Expose()
  requirements: string;

  @Expose()
  startDate: Date;

  @Expose()
  endDate: Date;

  @Expose()
  customerId: string;
}
