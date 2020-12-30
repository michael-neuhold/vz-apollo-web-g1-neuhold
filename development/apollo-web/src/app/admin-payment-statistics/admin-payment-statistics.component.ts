import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
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
}
