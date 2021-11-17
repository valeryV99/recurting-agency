import { Expose } from 'class-transformer';

export class PositionDto {
  @Expose()
  id: string;

  @Expose()
  position: string;

  @Expose()
  salary: string;

  @Expose()
  skills: string;

  @Expose()
  status: string;

  @Expose()
  requirements: string;

  @Expose()
  startDate: string;

  @Expose()
  endDate: string;

  @Expose()
  customerId: string;
}
