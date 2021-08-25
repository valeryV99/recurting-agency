import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { InterviewResultService } from './interviewResults.service';
import { AuthGuard } from '../guards/auth.guard';
import { Serialize } from '../interceptors/serialize.interceptor';
import { InterviewResultDto } from './dtos/interviewResult.dto';
import { CreateInterviewResultDto } from './dtos/create-interviewResult.dto';

@Controller('interviews')
export class InterviewResultsController {
  constructor(private interviewResultService: InterviewResultService) {}

  @Post('result')
  @UseGuards(AuthGuard)
  @Serialize(InterviewResultDto)
  createResult(@Body() body: CreateInterviewResultDto) {
    return this.interviewResultService.create(body);
  }
}
