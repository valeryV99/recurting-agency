import { IsEmail, IsString } from 'class-validator';

export class CreateCatDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
