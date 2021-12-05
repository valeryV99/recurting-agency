import { Expose, Transform } from 'class-transformer';

export class EmployeeDto {
  @Expose()
  id: string;

  @Expose()
  photo: string;

  @Expose()
  surname: string;

  @Expose()
  name: string;

  @Expose()
  patronymic: string;

  @Expose()
  birth: string;

  @Expose()
  residenceAddress: string;

  @Expose()
  education: string;

  @Expose()
  position: string;

  @Expose()
  salary: number;

  @Expose()
  status: string;

  @Expose()
  startDate: string;

  @Expose()
  endDate: string;

  @Expose()
  leavingReason: string;
}
