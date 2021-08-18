import { Expose, Transform } from 'class-transformer';

export class RecruiterDto {
  @Expose()
  id: number;
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

  @Transform(({ obj }) => {
    console.log(obj, '678');
    return obj.user.id;
  })
  @Expose()
  userId: number;
}
