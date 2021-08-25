import { InjectRepository } from '@nestjs/typeorm';
import { InterviewResult } from './interviewResult.entity';
import { Repository } from 'typeorm';
import { CreateInterviewResultDto } from './dtos/create-interviewResult.dto';

export class InterviewResultService {
  constructor(
    @InjectRepository(InterviewResult)
    private repo: Repository<InterviewResult>,
  ) {}

  create(interviewResultDto: CreateInterviewResultDto) {
    const interviewResult = this.repo.create(interviewResultDto);
    console.log(interviewResult, 'interviewResult');
    return this.repo.save(interviewResult);
  }
}
