import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { templateSourceUrl } from '@angular/compiler';

@Component({
  selector: 'app-admin-dashborad',
  templateUrl: './admin-dashborad.component.html',
  styleUrls: ['./admin-dashborad.component.css']
})



export class AdminDashboradComponent implements OnInit {

  /** Based on the screen size, switch from standard to one column per row */
  
  constructor(private breakpointObserver: BreakpointObserver) {}
  open = true;

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        this.open = false;
      } else 
      if (state.breakpoints[Breakpoints.Small]) {
        this.open = true;
      } else 
      if (state.breakpoints[Breakpoints.Medium]) {
        this.open = true;
      } else 
      if (state.breakpoints[Breakpoints.Large]) {
        this.open = true;
      } else 
      if (state.breakpoints[Breakpoints.XLarge]) {
        this.open = true;
      }
    });
  }

  toggleMenu() {
    this.open = !this.open;
  }

}
