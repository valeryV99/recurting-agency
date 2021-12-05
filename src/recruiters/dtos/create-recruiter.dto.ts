import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRecruiterDto {

  @ApiProperty({
    description: 'ссылка на фото  рекрутера',
    example: 'https://img.com/img-1',
  })
  @IsString()
  photo: string;

  @ApiProperty({
    description: 'Фамилия рекрутера',
    example: 'Viarenich',
  })
  @IsString()
  surname: string;

  @ApiProperty({ example: 'Valery', description: 'Имя рекрутера' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Отчество рекрутера',
    example: 'Ivanovich',
  })
  @IsString()
  patronymic: string;

  @ApiProperty({
    description: 'Дата рождения рекрутера',
    example: '20.07.1999',
  })
  @IsString()
  birth: string;

  @ApiProperty({
    description: 'Адрес проживания рекрутера',
    example: 'Minsk lazo 7 155',
  })
  @IsString()
  residenceAddress: string;

  @ApiProperty({
    description: 'Образование рекрутера',
    example: 'BSUIR',
  })
  @IsString()
  education: string;

  @ApiProperty({
    description: 'Должность рекрутера',
    example: 'Senior recruiter',
  })
  @IsString()
  position: string;
}
