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
  residence_address: string;
  @Expose()
  education: string;
  @Expose()
  possible_position: string;
  @Expose()
  status: string;
  @Transform(({ obj }) => obj.recruiter.id)
  @Expose()
  recruiterId: string;
}
