import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { map } from 'rxjs/internal/operators/map';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-admin-payment-statistics',
  templateUrl: './admin-payment-statistics.component.html',
  styleUrls: ['./admin-payment-statistics.component.css']
})
export class AdminPaymentStatisticsComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) {}

  cards = { columns: 2, item1: 1, item2: 1, item3: 2 }

  ngOnInit(): void {

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        this.cards = { columns: 2, item1: 2, item2: 2, item3: 2 }  
      } else 
      if (state.breakpoints[Breakpoints.Small]) {
        this.cards = { columns: 2, item1: 2, item2: 2, item3: 2 }  
      } else 
      if (state.breakpoints[Breakpoints.Medium]) {
        this.cards = { columns: 2, item1: 2, item2: 2, item3: 2 }  
      } else 
      if (state.breakpoints[Breakpoints.Large]) {
        this.cards = { columns: 2, item1: 1, item2: 1, item3: 2 }  
      } else 
      if (state.breakpoints[Breakpoints.XLarge]) {
        this.cards = { columns: 2, item1: 1, item2: 1, item3: 2 }  
      }
    });

  }
  /*
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  */
}
