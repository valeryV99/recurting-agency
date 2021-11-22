import { IsNumber, IsNumberString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCandidateDto {

  @ApiProperty({ example: 'https://img.com/img-1', description: 'The href of the candidate photo' })
  @IsString()
  photo: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'The ID of the assigned recruiter' })
  @IsString()
  recruiterId

  @ApiProperty({ example: 'Viarenich', description: 'The surname of the candidate' })
  @IsString()
  surname: string;

  @ApiProperty({ example: 'Valery', description: 'The name of the candidate' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Ivanovich', description: 'The patronymic of the candidate' })
  @IsString()
  patronymic: string;

  @ApiProperty({ example: '20.07.1999', description: 'The birth date of the candidate' })
  @IsString()
  birth: string;

  @ApiProperty({ example: 'HTML, CSS, ReactJS', description: 'The skills of the candidate' })
  @IsString()
  skills: string;

  @ApiProperty({ example: 10000, description: 'The desired salary' })
  @IsNumberString()
  desiredSalary: number

  @ApiProperty({ example: 'Minsk lazo 7 155', description: 'The residence Address of the candidate' })
  @IsString()
  residenceAddress: string;

  @ApiProperty({ example: 'BSUIR', description: 'The education of the candidate' })
  @IsString()
  education: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'The id of possible position' })
  @IsString()
  possiblePosition: string;

  @ApiProperty({ example: 'interview, call with HR, Tech interview', description: 'The status of condidate step interview' })
  @IsString()
  status: string;
}
