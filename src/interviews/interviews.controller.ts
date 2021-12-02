import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { InterviewsService } from './interviews.service';
import { AuthGuard } from '../guards/auth.guard';
import { Serialize } from '../interceptors/serialize.interceptor';
import { CreateInterviewDto } from './dtos/create-interview.dto';
import { InterviewDto } from './dtos/interview.dto';

@Controller('interviews')
export class InterviewsController {
  constructor(private interviewsService: InterviewsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(InterviewDto)
  createInterview(@Body() body: CreateInterviewDto) {
    return this.interviewsService.create(body);
  }

  @Get()
  @UseGuards()
  @Serialize(InterviewDto)
  getInterviews() {
    return this.interviewsService.getAll();
  }
}
