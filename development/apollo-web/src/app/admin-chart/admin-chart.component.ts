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

  ngOnInit(): void {
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = false;

  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: ChartDataSets[] = [];

}
