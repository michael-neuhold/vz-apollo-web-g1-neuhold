import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-admin-chart',
  templateUrl: './admin-chart.component.html',
  styleUrls: ['./admin-chart.component.css']
})
export class AdminChartComponent implements OnInit {

  constructor() { }

  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: ChartDataSets[] = [];

  ngOnInit(): void {
  }

}
