import { IsString } from 'class-validator';

export class CreateCandidateDto {
  @IsString()
  photo: string;

  @IsString()
  surname: string;

  @IsString()
  name: string;

  @IsString()
  patronymic: string;

  @IsString()
  birth: string;

  @IsString()
  residence_address: string;

  @IsString()
  education: string;

  @IsString()
  possible_position: string;

  @IsString()
  status: string;
}
