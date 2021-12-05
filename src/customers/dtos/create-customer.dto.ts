import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty({
    description: 'Название компании',
    example: 'ITransition',
  })
  @IsString()
  customerName: string;

  @ApiProperty({
    description: 'Адрес регистрации компании',
    example: 'Minsk lazo 9',
  })
  @IsString()
  address: string;
}
