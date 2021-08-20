import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { AuthGuard } from '../guards/auth.guard';
import { Serialize } from '../interceptors/serialize.interceptor';
import { CreateCandidateDto } from './dtos/create-candidate.dto';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/user.entity';
import { CandidateDto } from './dtos/candidate.dto';

@Controller('candidates')
export class CandidatesController {
  constructor(private candidateService: CandidatesService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(CandidateDto)
  createCandidate(@Body() body: CreateCandidateDto, @CurrentUser() user: User) {
    return this.candidateService.create(body, user.id);
  }
}
