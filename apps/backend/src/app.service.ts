import { Injectable } from '@nestjs/common';
import { DATA } from './assets/data';
import { Exercise } from './models/exercise.interface';
import * as moment from 'moment';
import * as _ from 'underscore';

@Injectable()
export class AppService {
  getUsers(): number[] {
    return [...new Set(DATA.map((exercise: Exercise) => exercise.UserId))];
  }

  getSubjects(): string[] {
    return [...new Set(DATA.map((exercise: Exercise) => exercise.Subject))];
  }

  getLearningObjectives(subject: string): string[] {
    return [
      ...new Set(
        DATA.filter((exercise) => exercise.Subject === subject).map(
          (exercise: Exercise) => exercise.LearningObjective,
        ),
      ),
    ];
  }

  getUserProgress(
    userId: number,
    subject?: string,
    learningObjective?: string,
  ) {
    let res = DATA.filter((exercise: Exercise) => exercise.UserId === userId);

    if (subject) {
      res = res.filter((exercise) => exercise.Subject === subject);
      if (learningObjective) {
        res = res.filter(
          (exercise) => exercise.LearningObjective === learningObjective,
        );
      }
    }

    return this.transformToChartData(learningObjective, res);
  }

  getProgressOnDate(date: string) {
    const res = _.groupBy<[]>(DATA, (date) => {
      return moment(date.SubmitDateTime).startOf('day').format();
    });

    return res[date].reduce(
      (prev, curr) => {
        return {
          day: date,
          subjects: prev.subjects.includes(curr.Subject)
            ? [...prev.subjects]
            : [...prev.subjects, curr.Subject],
          learningObjectives: prev.learningObjectives.includes(
            curr.LearningObjective,
          )
            ? [...prev.learningObjectives]
            : [...prev.learningObjectives, curr.LearningObjective],
          averageProgress: (prev.averageProgress += curr.Progress),
          averageDifficulty: +curr.Difficulty
            ? (prev.averageDifficulty += +curr.Difficulty)
            : prev.averageDifficulty,
          exercisesCount: (prev.exercisesCount += 1),
        };
      },
      {
        day: date,
        subjects: [],
        learningObjectives: [],
        averageProgress: 0,
        averageDifficulty: 0,
        exercisesCount: 0,
      },
    );
  }

  private transformToChartData(learningObjective: string, data: Exercise[]) {
    const filteredData = data
      .sort(
        (a, b) =>
          new Date(a.SubmitDateTime).getTime() -
          new Date(b.SubmitDateTime).getTime(),
      )
      .filter(
        (data) =>
          new Date(data.SubmitDateTime) < new Date('2015-03-24 11:30:00'),
      );

    return {
      label: learningObjective,
      labels: filteredData.map((data) => new Date(data.SubmitDateTime)),
      data: filteredData
        .map((data) => data.Progress)
        .reduce(
          (prev, curr) => {
            return [...prev, prev[prev.length - 1] + curr];
          },
          [0],
        ),
    };
  }
}
