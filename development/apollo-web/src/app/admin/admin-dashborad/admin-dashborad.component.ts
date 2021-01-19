import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { sanitizeIdentifier, templateSourceUrl } from '@angular/compiler';

@Component({
  selector: 'app-admin-dashborad',
  templateUrl: './admin-dashborad.component.html',
  styleUrls: ['./admin-dashborad.component.css']
})

export class AdminDashboradComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) {}

  // data
  open = true;
  mode = 'side';

  navigationLinks = [
    { link: "./statistic" , name: "Statistic" },
    { link: "./cinemahall" , name: "Cinemahall" },
    { link: "./reservation", name: "Reservation" },
    { link: "./genre", name: "Genre" },
    { link: "./movie", name: "Movie" },
    { link: "./schedule", name: "Schedule" },
    { link: "./category", name: "Category" }
  ]

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
        this.mode = 'over';
      } else
      if (state.breakpoints[Breakpoints.Small]) {
        this.open = true;
        this.mode = 'side';
      } else
      if (state.breakpoints[Breakpoints.Medium]) {
        this.open = true;
        this.mode = 'side';
      } else
      if (state.breakpoints[Breakpoints.Large]) {
        this.open = true;
        this.mode = 'side';
      } else
      if (state.breakpoints[Breakpoints.XLarge]) {
        this.open = true;
        this.mode = 'side';
      }
    });
  }

  toggleMenu() {
    this.open = !this.open;
  }

}
