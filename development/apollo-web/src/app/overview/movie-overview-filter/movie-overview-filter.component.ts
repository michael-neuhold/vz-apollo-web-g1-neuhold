import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { CinemaHall, CinemahallService } from '../../services/cinemahall/cinemahall.service';

@Component({
  selector: 'app-movie-overview-filter',
  templateUrl: './movie-overview-filter.component.html',
  styleUrls: ['./movie-overview-filter.component.css']
})
export class MovieOverviewFilterComponent implements OnInit {

  constructor(private cinemaHallService: CinemahallService) { }

  cinemaHalls: CinemaHall[];

  filterAttributes = new FilterAttributes(null, null, null, null);

  @Output() applyFilter = new EventEmitter<FilterAttributes>();

  keyup = new EventEmitter<string>();

  ngOnInit(): void {
    this.cinemaHallService.getAll().subscribe(res => this.cinemaHalls = res);

    this.keyup.pipe(
      debounceTime(500)
    ).subscribe(movieTitle => {
      this.applyFilter.emit(this.filterAttributes);
    });
  }

}

export class FilterAttributes{
  constructor(
    public movieTitle?: string,
    public startDate?: Date,
    public endDate?: Date,
    public cinemaHall?: string
  ){}
}
