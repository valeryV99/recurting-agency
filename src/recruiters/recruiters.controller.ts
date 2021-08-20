import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { RecruitersService } from './recruiters.service';
import { Serialize } from '../interceptors/serialize.interceptor';
import { CreateRecruiterDto } from './dtos/create-recruiter.dto';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/user.entity';
import { RecruiterDto } from './dtos/recruiter.dto';
import { AuthGuard } from '../guards/auth.guard';

@Controller('recruiters')
export class RecruitersController {
  constructor(private recruitersService: RecruitersService) {}

  @Get()
  getAllRecruiters() {
    return this.recruitersService.getAll();
  }

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(RecruiterDto)
  createRecruiter(@Body() body: CreateRecruiterDto, @CurrentUser() user: User) {
    return this.recruitersService.create(body, user);
  }
}
