import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

const TODAY = '2015-03-23T00:00:00+01:00';
const LAST_WEEK = '2015-03-16T00:00:00+01:00';

@Component({
  selector: 'app-class-progress',
  templateUrl: './class-progress.component.html',
  styleUrls: ['./class-progress.component.scss'],
})
export class ClassProgressComponent implements OnInit {
  public progressToday: any;
  public progressLastWeek: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProgressForDay(TODAY).then((res) => {
      this.progressToday = res;
      console.log(this.progressToday);
    });

    this.dataService.getProgressForDay(LAST_WEEK).then((res) => {
      this.progressLastWeek = res;
      console.log(this.progressLastWeek);
    });
  }
}
