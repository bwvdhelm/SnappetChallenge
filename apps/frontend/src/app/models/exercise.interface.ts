export interface Exercise {
  SubmittedAnswerId: number;
  SubmitDateTime: Date;
  Correct: number;
  Progress: number;
  UserId: number;
  ExerciseId: number;
  Difficulty: number;
  Subject: string;
  Domain: string;
  LearningObjective: string;
}
