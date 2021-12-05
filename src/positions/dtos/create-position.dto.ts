import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePositionDto {
  @ApiProperty({
    description: 'Название позиции',
    example: 'Frontend developer',
  })
  @IsString()
  position: string;

  @ApiProperty({
    description: 'ЗП на позицию',
    example: 5000,
  })
  @IsNumber()
  salary: number;

  @ApiProperty({
    description: 'Требуемые умения',
    example: 'HTML, CSS, JS, ReactJS',
  })
  @IsString()
  skills: string;

  @ApiProperty({
    description: 'Статус позиции',
    example: 'Открытая',
  })
  @IsString()
  status: string;

  @ApiProperty({
    description: 'Требования',
    example: 'диплом БГУИР',
  })
  @IsString()
  requirements: string;

  @ApiProperty({
    description: 'Дата открытия позиции',
    example: '20.07.1999',
  })
  @IsString()
  startDate: string;

  @ApiProperty({
    description: 'Дата закрытия позиции',
    example: '20.08.1999',
  })
  @IsString()
  endDate: string;

  @ApiProperty({
    description: 'Заказчик позиции',
    example: 'Light Well Organization',
  })
  @IsString()
  customerId: string;
}
