import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail-schedules',
  templateUrl: './movie-detail-schedules.component.html',
  styleUrls: ['./movie-detail-schedules.component.css']
})
export class MovieDetailSchedulesComponent implements OnInit {

  constructor() { }

  Dummy : string[] = ["Test1", "Test2", "Test3", "Test4"];

  ngOnInit(): void {
  }

}
