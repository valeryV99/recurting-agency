import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Position } from './position.entity';
import { Repository } from 'typeorm';
import { CreatePositionDto } from './dtos/create-position.dto';
import { PositionDto } from './dtos/position.dto';
import { EditPositionDto } from './dtos/edit-position.dto';

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
    return this.repo.find({ customerId });
  }

  getByPositionId(id: string) {
    return this.repo.findOne({ id });
  }

  async editByPositionId(position: EditPositionDto) {
    const a = await this.repo.update(position.id, position);
    console.log(a, 'v');
    const r = await this.repo.findOne({ id: position.id });
    console.log(r, 'r');
    return a;
  }
}
