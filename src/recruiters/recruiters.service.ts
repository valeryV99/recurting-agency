import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recruiter } from './recruiter.entity';
import { Repository } from 'typeorm';
import { CreateRecruiterDto } from './dtos/create-recruiter.dto';
import { User } from '../users/user.entity';

@Injectable()
export class RecruitersService {
  constructor(
    @InjectRepository(Recruiter) private repo: Repository<Recruiter>,
  ) {}

  findOne(id: string) {
    return this.repo.findOne(id);
  }

  getAll() {
    return this.repo.find();
  }

  create(recruiterDto: CreateRecruiterDto, user: User) {
    const recruiter = this.repo.create(recruiterDto);
    recruiter.id = user.id;
    return this.repo.save(recruiter);
  }
}
