import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recruiter } from './recruiter.entity';
import { RecruitersController } from './recruiters.controller';
import { RecruitersService } from './recruiters.service';

@Module({
  imports: [TypeOrmModule.forFeature([Recruiter])],
  controllers: [RecruitersController],
  providers: [RecruitersService],
  exports: [RecruitersService],
})
export class RecruitersModule {}
