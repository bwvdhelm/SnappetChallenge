import { Component, Input, OnInit } from '@angular/core';
import Chart, { ChartItem } from 'chart.js/auto';
import { LineChartData } from 'src/app/models/line-chart-data.interface';

@Component({
  selector: 'app-progress-chart',
  templateUrl: './progress-chart.component.html',
  styleUrls: ['./progress-chart.component.scss'],
})
export class ProgressChartComponent implements OnInit {
  public ctx: ChartItem;
  @Input() data: LineChartData;

  constructor() {}

  ngOnInit(): void {
    this.ctx = document.getElementById('myChart') as ChartItem;
    new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: this.data.labels,
        datasets: [
          {
            label: this.data.label,
            data: this.data.data,
            borderWidth: 1,
            borderColor: 'white',
          },
        ],
      },
      options: {
        borderColor: 'white',
        plugins: {
          legend: {
            display: false,
          },
        },
        color: 'white',
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              maxTicksLimit: 6,
            },
          },
        },
      },
    });
  }
}
