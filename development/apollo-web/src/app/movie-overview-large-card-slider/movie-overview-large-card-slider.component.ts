import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-overview-large-card-slider',
  templateUrl: './movie-overview-large-card-slider.component.html',
  styleUrls: ['./movie-overview-large-card-slider.component.css']
})

export class MovieOverviewLargeCardSliderComponent implements OnInit {

  constructor() { }

  @Input() movies;

  ngOnInit() {
    
  }

  /*
  movies: Movie[];

  ngOnInit() {
    this.getAll().subscribe(res => this.movies = res);
  }

  getAll(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>('http://localhost:5000/schedule/current').pipe(map(res => res));
  }
  */
}
