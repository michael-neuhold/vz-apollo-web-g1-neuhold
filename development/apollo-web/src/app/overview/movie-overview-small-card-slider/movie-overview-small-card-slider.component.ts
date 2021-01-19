import { Component, Input, OnInit } from '@angular/core';
import { MovieSchedule } from 'src/app/domains/schedule';

@Component({
  selector: 'app-movie-overview-small-card-slider',
  templateUrl: './movie-overview-small-card-slider.component.html',
  styleUrls: ['./movie-overview-small-card-slider.component.css']
})
export class MovieOverviewSmallCardSliderComponent implements OnInit {

  constructor() { }

  @Input() movies;

  ngOnInit(): void {
    console.log(this.movies);
  }

}
