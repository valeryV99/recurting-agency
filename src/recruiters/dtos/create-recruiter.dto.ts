import { IsString, IsNumber } from 'class-validator';
import { Column, OneToOne } from 'typeorm';
import { User } from '../../users/user.entity';

export class CreateRecruiterDto {
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
  position: string;
}
