import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from './candidate.entity';
import { CandidatesService } from './candidates.service';
import { CandidatesController } from './candidates.controller';
import { RecruitersService } from '../recruiters/recruiters.service';
import { Recruiter } from '../recruiters/recruiter.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Candidate]),
    TypeOrmModule.forFeature([Recruiter]),
  ],
  controllers: [CandidatesController],
  providers: [CandidatesService, RecruitersService],
})
export class CandidatesModule {}
