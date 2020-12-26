import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-overview-large-card-slider',
  templateUrl: './movie-overview-large-card-slider.component.html',
  styleUrls: ['./movie-overview-large-card-slider.component.css']
})
export class MovieOverviewLargeCardSliderComponent implements OnInit {

  constructor() { }

  @Input() movies;

  ngOnInit(): void {
  }

}
