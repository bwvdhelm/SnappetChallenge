import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LineChartData } from '../models/line-chart-data.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(): Promise<number[]> {
    return this.http.get<number[]>(`${this.url}/users`).toPromise();
  }

  getSubjects(): Promise<string[]> {
    return this.http.get<string[]>(`${this.url}/subjects`).toPromise();
  }

  getLearningObjectives(subject: string): Promise<string[]> {
    return this.http
      .get<string[]>(`${this.url}/subjects/${subject}`)
      .toPromise();
  }

  getProgress(
    userId: number,
    subject: string,
    learningObjective: string
  ): Promise<any> {
    let params = new HttpParams();

    params = params.append('subject', subject);
    params = params.append('learningObjective', learningObjective);

    return this.http
      .get<LineChartData>(`${this.url}/users/${userId}/progress`, {
        params: params,
      })
      .toPromise();
  }

  getProgressForDay(date: string) {
    return this.http.get<any>(`${this.url}/progress/${date}`).toPromise();
  }
}
