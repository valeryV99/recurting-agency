import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PositionsService } from './positions.service';
import { Serialize } from '../interceptors/serialize.interceptor';
import { PositionDto } from './dtos/position.dto';
import { CreatePositionDto } from './dtos/create-position.dto';
import { EditPositionDto } from './dtos/edit-position.dto';

@Controller('positions')
export class PositionsController {
  constructor(private positionsService: PositionsService) {}

  @Post()
  @UseGuards()
  @Serialize(PositionDto)
  createPosition(@Body() body: CreatePositionDto) {
    return this.positionsService.create(body);
  }

  @Get()
  @UseGuards()
  @Serialize(PositionDto)
  getPositions() {
    return this.positionsService.getAll();
  }

  @Get('/:customerId')
  @UseGuards()
  @Serialize(PositionDto)
  getPositionsByCustomerId(@Param('customerId') customerId: string) {
    return this.positionsService.getByCustomerId(customerId);
  }

  @Get('/:positionId/get')
  @UseGuards()
  @Serialize(PositionDto)
  getPositionByPositionId(@Param('positionId') positionId: string) {
    return this.positionsService.getByPositionId(positionId);
  }

  @Put('/:positionId/edit')
  @UseGuards()
  @Serialize(PositionDto)
  editPositionByPositionId(@Body() body: EditPositionDto) {
    return this.positionsService.editByPositionId(body);
  }
}
