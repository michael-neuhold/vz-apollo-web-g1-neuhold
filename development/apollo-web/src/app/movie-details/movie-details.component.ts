import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor() { }

  Dummy : string[] = ["Test1", "Test2", "Test3", "Test4"];

  ngOnInit(): void {
  }

}
