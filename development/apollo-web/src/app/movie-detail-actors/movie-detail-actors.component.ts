import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail-actors',
  templateUrl: './movie-detail-actors.component.html',
  styleUrls: ['./movie-detail-actors.component.css']
})
export class MovieDetailActorsComponent implements OnInit {

  constructor() { }

  Dummy : string[] = ["Test1", "Test2", "Test3", "Test4"];

  ngOnInit(): void {
  }

}
