import { Expose, Transform } from 'class-transformer';

export class CandidateDto {
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
  skills: string;
  @Expose()
  education: string;
  @Expose()
  possiblePosition: string;
  @Expose()
  status: string;
  @Expose()
  recruiterId: string;
}
