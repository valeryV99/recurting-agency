import { Expose } from 'class-transformer';

export class CustomerDto {
  @Expose()
  id: string;
  @Expose()
  customerName: string;
  @Expose()
  address: string;
}
