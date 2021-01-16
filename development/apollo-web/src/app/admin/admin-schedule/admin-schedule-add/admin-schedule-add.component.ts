import { DatePipe, Time } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CinemaHall } from 'src/app/domains/cinemahall';
import { MovieDetail } from 'src/app/domains/movie';
import { Schedule } from 'src/app/domains/schedule';
import { CinemahallService } from 'src/app/services/cinemahall/cinemahall.service';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-admin-schedule-add',
  templateUrl: './admin-schedule-add.component.html',
  styleUrls: ['./admin-schedule-add.component.css']
})
export class AdminScheduleAddComponent implements OnInit {

  constructor(public datepipe: DatePipe, public dialogRef: MatDialogRef<AdminScheduleAddComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private cinemahallService: CinemahallService, private movieService: MovieService) {}

  // form data
  myControl = new FormControl();
  options: MovieDetail[] = [];
  filteredOptions: Observable<MovieDetail[]>;

  // autocomplete and cinemahall data
  cinemaHalls: CinemaHall[];
  movies: MovieDetail[];

  // schedule
  newSchedule: Schedule = new Schedule();

  cinemaHallId: string;
  movieTitle: string;
  selectedTime: Date;
  selectedEndDate: Date;
  selectedStartDate: Date;

  onCloseClick(): void {
    this.dialogRef.close( { save: false, data: {} } );
  }

  onSaveClick() : void {
    /*
    console.log(this.cinemaHallId);
    console.log(this.movieTitle);
    console.log(this.selectedEndDate);
    console.log(this.selectedStartDate);
    console.log(this.selectedTime);
    console.log(this.datepipe.transform(this.selectedTime.getTime(), "HH:mm"));
    */
    this.generateSchedules();
    this.dialogRef.close({ save: true, data: {} });
  }

  ngOnInit(): void {
    this.cinemahallService.getAll().subscribe(result => this.cinemaHalls = result);
    this.movieService.getAll().subscribe(result => {
      this.movies = result
      this.options = result;
      //this.movies.forEach( movie => this.options.push(movie.title));
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''), map(value => this._filter(value))
      );
    });
  }

  private _filter(value: string): MovieDetail[] {
    const filterValue = value.toLowerCase();
    console.log(this.options);
    return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
  }

  generateSchedules() {
    let schedules: Schedule[] = [];
    for (var currentDate = this.selectedStartDate; currentDate <= this.selectedEndDate; currentDate.setDate(currentDate.getDate() + 1)) {
      let schedule: Schedule = new Schedule();
      currentDate.setHours(this.selectedTime.getHours());
      currentDate.setMinutes(this.selectedTime.getMinutes());
      schedule.startTime = currentDate;
      this.cinemahallService.getById(this.cinemaHallId).subscribe( result => schedule.cinemaHallVersionId = result.versionId );
      this.movies.forEach(movie => {
        if(movie.title == this.movieTitle)
          schedule.movieId = movie.id;
      });
      schedules.push(schedule);
    }
    console.log(schedules);
  }

}
