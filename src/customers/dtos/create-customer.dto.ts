import { IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  customer_name: string;

  @IsString()
  address: string;
}
