import { Injectable, Post } from '@nestjs/common';
import { Recruiter } from './entities/recruiter.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecruiterService {
  constructor(
    @InjectRepository(Recruiter) private repo: Repository<Recruiter>,
  ) {}

  create() {}
}
