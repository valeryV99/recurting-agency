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
  date_of_creation: Date;

  @Expose()
  customerId: string;
}
