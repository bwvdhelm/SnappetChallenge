import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Exercise } from './models/exercise.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers(): number[] {
    return this.appService.getUsers();
  }

  @Get('subjects')
  getSubjects(): string[] {
    return this.appService.getSubjects();
  }

  @Get('subjects/:subject')
  getLearningObjectives(@Param('subject') subject: string): string[] {
    return this.appService.getLearningObjectives(subject);
  }

  @Get('users/:userId/progress')
  getUserProgress(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('subject') subject: string,
    @Query('learningObjective') learningObjective: string,
  ) {
    return this.appService.getUserProgress(userId, subject, learningObjective);
  }

  @Get('progress/:date')
  getProgressOnDate(@Param('date') date: string) {
    return this.appService.getProgressOnDate(date);
  }
}
