import { Expose, Transform } from 'class-transformer';

export class InterviewDto {
  @Expose()
  id: string;
  @Expose()
  date: Date;

  @Transform(({ obj }) => {
    console.log(obj, 'obj');
    return obj.candidateId;
  })
  @Expose()
  candidateId: string;
}
