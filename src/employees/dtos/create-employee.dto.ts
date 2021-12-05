import { IsNumberString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({
    description: 'ссылка на фото кандидата',
    example: 'https://img.com/img-1',
  })
  @IsString()
  photo: string;

  @ApiProperty({
    description: 'ИД рекрутера который курирует кандидата',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  recruiterId;

  @ApiProperty({
    description: 'Фамилия кандидата',
    example: 'Viarenich',
  })
  @IsString()
  surname: string;

  @ApiProperty({ example: 'Valery', description: 'Имя кандидата' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Отчество кандидата',
    example: 'Ivanovich',
  })
  @IsString()
  patronymic: string;

  @ApiProperty({
    description: 'Дата рождения кандидата',
    example: '20.07.1999',
  })
  @IsString()
  birth: string;

  @ApiProperty({
    description: 'Умения кандидата',
    example: 'HTML, CSS, ReactJS',
  })
  @IsString()
  skills: string;

  @ApiProperty({description: 'желаемая зп кандидата', example: 10000})
  @IsNumberString()
  desiredSalary: number;

  @ApiProperty({
    description: 'Адрес проживания кандидата',
    example: 'Minsk lazo 7 155',
  })
  @IsString()
  residenceAddress: string;

  @ApiProperty({
    description: 'Образование кандидата',
    example: 'BSUIR',
  })
  @IsString()
  education: string;

  @ApiProperty({
    description: 'Статус кандидата',
    example: 'interview, call with HR, Tech interview',
  })
  @IsString()
  status: string;

  @IsString()
  customerId: string;
}
