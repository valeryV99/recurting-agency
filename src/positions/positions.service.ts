import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Position } from './position.entity';
import { Repository } from 'typeorm';
import { CreatePositionDto } from './dtos/create-position.dto';

@Injectable()
export class PositionsService {
  constructor(@InjectRepository(Position) private repo: Repository<Position>) {}

  create(positionDto: CreatePositionDto) {
    const position = this.repo.create(positionDto);

    return this.repo.save(position);
  }

  getAll() {
    return this.repo.find();
  }

  getByCustomerId(customerId: string) {
    return this.repo.find({customerId})
  }
}
