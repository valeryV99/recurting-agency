import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterviewResult } from './interviewResult.entity';
import { InterviewResultsController } from './interviewResults.controller';
import { InterviewResultService } from './interviewResults.service';

@Module({
  imports: [TypeOrmModule.forFeature([InterviewResult])],
  controllers: [InterviewResultsController],
  providers: [InterviewResultService],
})
export class InterviewResultsModule {}
