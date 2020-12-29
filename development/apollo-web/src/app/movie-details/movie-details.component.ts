import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) { }

  columns : number = 4;
  item1 : number = 1;
  item2 : number = 3;

  ngOnInit(): void {
      this.breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
      ]).subscribe( (state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
            this.columns = 1;
            this.item1 = 1;
            this.item2 = 1;   
        } else 
        if (state.breakpoints[Breakpoints.Small]) {
            this.columns = 4;
            this.item1 = 2;
            this.item2 = 2;
        } else 
        if (state.breakpoints[Breakpoints.Medium]) {
          this.columns = 4;
          this.item1 = 2;
          this.item2 = 2;
        } else 
        if (state.breakpoints[Breakpoints.Large]) {

          this.columns = 4;
          this.item1 = 1;
          this.item2 = 3;
        } else 
        if (state.breakpoints[Breakpoints.XLarge]) {
            this.columns = 4;
            this.item1 = 1;
            this.item2 = 3;
        }
      });
    }

}
