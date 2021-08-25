import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { User } from '../users/user.entity';

@Injectable()
export class CustomersService {
  constructor(@InjectRepository(Customer) private repo: Repository<Customer>) {}

  create(customerDto: CreateCustomerDto, user: User) {
    const customer = this.repo.create(customerDto);
    customer.id = user.id;
    return this.repo.save(customer);
  }
}
