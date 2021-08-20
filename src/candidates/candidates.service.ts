import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidate } from './candidate.entity';
import { Repository } from 'typeorm';
import { CreateCandidateDto } from './dtos/create-candidate.dto';
import { User } from '../users/user.entity';
import { RecruitersService } from '../recruiters/recruiters.service';

@Injectable()
export class CandidatesService {
  constructor(
    @InjectRepository(Candidate) private repo: Repository<Candidate>,
    private recruitersService: RecruitersService,
  ) {}

  async create(candidateDto: CreateCandidateDto, userId: User['id']) {
    const candidate = this.repo.create(candidateDto);
    candidate.recruiter = await this.recruitersService.findOne(userId);
    return this.repo.save(candidate);
  }
}
