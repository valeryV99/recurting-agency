import { Expose } from 'class-transformer';

export class RecruiterDto {
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
  residence_address: string;
  @Expose()
  education: string;
  @Expose()
  position: string;
}
