import { Expose } from 'class-transformer';

export class CustomerDto {
  @Expose()
  id: string;
  @Expose()
  customer_name: string;
  @Expose()
  address: string;
}
