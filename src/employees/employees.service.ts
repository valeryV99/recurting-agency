import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dtos/create-employee.dto';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee) private repo: Repository<Employee>,
  ) {}

  async create(employeeDto: CreateEmployeeDto) {
    const employee = this.repo.create(employeeDto);
    return this.repo.save(employee);
  }

  findAll(customerId: string) {
    return this.repo.find({customerId});
  }
}
