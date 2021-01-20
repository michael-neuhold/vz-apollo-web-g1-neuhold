import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { map } from 'rxjs/internal/operators/map';
import { PaymentstatisticService } from '../../../services/paymentstatistic/paymentstatistic.service';


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

  constructor(private breakpointObserver: BreakpointObserver, private paymentstatistic: PaymentstatisticService) {}

  cards = { columns: 2, chart1: 1, chart2: 1, chart3: 1, chart4: 1 }

  genre_values = [];
  genre_labels = [];
  month_values = [];
  month_labels = [];
  year_values = [];
  year_labels = [];
  weekday_values = [];
  weekday_labels = [];

  ngOnInit(): void {

    this.paymentstatistic.getGenreStatistic().subscribe(res => {
      this.genre_values = res.map(item => item.value);
      this.genre_labels = res.map(item => item.name);
    });

    this.paymentstatistic.getMonthStatistic().subscribe(res => {
      this.month_values = res.map(item => item.value);
      this.month_labels = res.map(item => item.name);
    });

    this.paymentstatistic.getYearStatistic().subscribe(res => {
      this.year_values = res.map(item => item.value);
      this.year_labels = res.map(item => item.name);
    });

    this.paymentstatistic.getWeekdayStatistic().subscribe(res => {
      this.weekday_values = res.map(item => item.value);
      this.weekday_labels = res.map(item => item.name);
    });

    // responsive:
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        this.cards =  { columns: 2, chart1: 2, chart2: 2, chart3: 2, chart4: 2 }
      } else
      if (state.breakpoints[Breakpoints.Small]) {
        this.cards =  { columns: 2, chart1: 2, chart2: 2, chart3: 2, chart4: 2 }
      } else
      if (state.breakpoints[Breakpoints.Medium]) {
        this.cards =  { columns: 2, chart1: 2, chart2: 2, chart3: 2, chart4: 2 }
      } else
      if (state.breakpoints[Breakpoints.Large]) {
        this.cards = { columns: 2, chart1: 1, chart2: 1, chart3: 1, chart4: 1 }
      } else
      if (state.breakpoints[Breakpoints.XLarge]) {
        this.cards =  { columns: 2, chart1: 1, chart2: 1, chart3: 1, chart4: 1 }
      }
    });

  }
}
