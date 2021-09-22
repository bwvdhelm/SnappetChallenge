import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LineChartData } from 'src/app/models/line-chart-data.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-student-progress',
  templateUrl: './student-progress.component.html',
  styleUrls: ['./student-progress.component.scss'],
})
export class StudentProgressComponent implements OnInit {
  public filterForm: FormGroup;
  public users: number[];
  public subjects: string[];
  public learningObjectives: string[];
  public data: LineChartData;
  public isLoadingData = false;

  get controls() {
    return this.filterForm.controls;
  }

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.filterForm = this.fb.group({
      userId: [null, Validators.required],
      subject: [null, Validators.required],
      learningObjective: [null, Validators.required],
    });

    this.filterForm.controls.subject.valueChanges.subscribe(
      (learningObjective) => {
        this.dataService
          .getLearningObjectives(learningObjective)
          .then((learningObjectives) => {
            this.learningObjectives = learningObjectives;
          });
      }
    );
  }

  ngOnInit(): void {
    this.dataService.getUsers().then((users) => {
      this.users = users;
    });

    this.dataService.getSubjects().then((subjects) => {
      this.subjects = subjects;
    });
  }

  public getProgress() {
    if (this.filterForm.invalid) {
      this.filterForm.updateValueAndValidity();
      return;
    }

    this.isLoadingData = true;

    this.dataService
      .getProgress(
        this.controls.userId.value,
        this.controls.subject.value,
        this.controls.learningObjective.value
      )
      .then((data) => {
        this.data = data;
        this.isLoadingData = false;
      });
  }
}
