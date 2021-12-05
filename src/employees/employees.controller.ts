import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { AuthGuard } from '../guards/auth.guard';
import { Serialize } from '../interceptors/serialize.interceptor';
import { CreateEmployeeDto } from './dtos/create-employee.dto';
import { EmployeeDto } from './dtos/employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private employeeService: EmployeesService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(EmployeeDto)
  createCandidate(@Body() body: CreateEmployeeDto) {
    return this.employeeService.create(body);
  }

  @Get('/:customerId')
  @UseGuards(AuthGuard)
  @Serialize(EmployeeDto)
  getAll(@Param('customerId') customerId: string) {
    return this.employeeService.findAll(customerId);
  }
}
