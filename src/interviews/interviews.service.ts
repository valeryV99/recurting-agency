import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Interview } from './interview.entity';
import { Repository } from 'typeorm';
import { CreateInterviewDto } from './dtos/create-interview.dto';

@Injectable()
export class InterviewsService {
  constructor(
    @InjectRepository(Interview) private repo: Repository<Interview>,
  ) {}

  create(interviewDto: CreateInterviewDto) {
    const interview = this.repo.create(interviewDto);

    return this.repo.save(interview);
  }
}
