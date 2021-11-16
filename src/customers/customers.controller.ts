import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Serialize } from '../interceptors/serialize.interceptor';
import { CustomerDto } from './dtos/customer.dto';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/user.entity';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Post()
  @UseGuards()
  @Serialize(CustomerDto)
  createCustomer(@Body() body: CreateCustomerDto, @CurrentUser() user: User) {
    return this.customersService.create(body, user);
  }

  @Get()
  @UseGuards()
  @Serialize(CustomerDto)
  getCustomers() {
    return this.customersService.getAll();
  }
}
