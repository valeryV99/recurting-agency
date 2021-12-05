import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInterviewDto {
  @ApiProperty({
    description: 'ИД кандидата',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  candidateId: string;

  @ApiProperty({
    description: 'ИД позиции на которую собеседуем',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  positionId: string;

  @ApiProperty({
    description: 'Дата проведения интервью',
    example: '20.07.1999',
  })
  @IsString()
  interviewDate: string;

  @ApiProperty({
    description: 'Оценка кандидата по итогам интервью',
    example: 5,
  })
  @IsString()
  rating: number;

  @ApiProperty({
    description: 'Общительность кандидата',
    example: 5,
  })
  @IsString()
  sociability: number;

  @ApiProperty({
    description: 'Командная работа кандидата',
    example: 5,
  })
  @IsString()
  teamwork: number;

  @ApiProperty({
    description: 'Внимание к деталям кандидата',
    example: 5,
  })
  @IsString()
  attentionToDetails: number

  @ApiProperty({
    description: 'Само мотивация кандидата',
    example: 5,
  })
  @IsString()
  selfMotivation: number
}
