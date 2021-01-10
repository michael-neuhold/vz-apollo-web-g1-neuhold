import { Component, Input, OnInit } from '@angular/core';
import { MovieSchedule, ScheduleService } from '../services/schedule.service';
@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.css']
})
export class MovieOverviewComponent implements OnInit {

  constructor(private scheduleService : ScheduleService) { }

  currentMovies : Array<MovieSchedule>;
  filteredMovies : Array<MovieSchedule>;

  movies: { id: number, name: string }[] = [
    { "id": 1, "name": "Movie 1" },
    { "id": 2, "name": "Movie 2" },
    { "id": 3, "name": "Movie 3" },
    { "id": 4, "name": "Movie 4" },
    { "id": 5, "name": "Movie 5" },
    { "id": 6, "name": "Movie 6" }
];

  ngOnInit(): void {
    this.scheduleService.getCurrent().subscribe(res => this.currentMovies = res);
    this.scheduleService.getFiltered().subscribe(res => this.filteredMovies = res);
  }

}
