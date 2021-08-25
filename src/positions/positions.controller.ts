import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { Serialize } from '../interceptors/serialize.interceptor';
import { PositionDto } from './dtos/position.dto';
import { CreatePositionDto } from './dtos/create-position.dto';

@Controller('positions')
export class PositionsController {
  constructor(private positionsService: PositionsService) {}

  @Post()
  @UseGuards()
  @Serialize(PositionDto)
  createPosition(@Body() body: CreatePositionDto) {
    return this.positionsService.create(body);
  }
}
