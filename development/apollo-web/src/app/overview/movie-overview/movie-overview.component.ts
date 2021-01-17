import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MovieSchedule } from 'src/app/domains/schedule';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { FilterAttributes } from '../movie-overview-filter/movie-overview-filter.component';
@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.css']
})
export class MovieOverviewComponent implements OnInit {
  isLoading: boolean;

  constructor(private scheduleService : ScheduleService) { }

  currentMovies : Array<MovieSchedule>;
  filteredMovies : Array<MovieSchedule>;

  applyFilter(filterAttributes: FilterAttributes) {
    this.scheduleService.getFiltered(filterAttributes).subscribe(res => this.filteredMovies = res);
  }

  ngOnInit(): void {
    this.scheduleService.getCurrent().subscribe(res => this.currentMovies = res);
    this.scheduleService.getFiltered(new FilterAttributes(null, null, null, null)).subscribe(res => this.filteredMovies = res);
  }

}


