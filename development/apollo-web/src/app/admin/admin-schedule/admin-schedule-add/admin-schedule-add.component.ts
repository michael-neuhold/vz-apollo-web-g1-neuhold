import { DatePipe, Time } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    public datepipe: DatePipe,
    public dialogRef: MatDialogRef<AdminScheduleAddComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
    private cinemahallService: CinemahallService,
    private movieService: MovieService)
  {}

  // data
  myControl = new FormControl();
  options: MovieDetail[] = [];
  filteredOptions: Observable<MovieDetail[]>;
  cinemaHalls: CinemaHall[];
  movies: MovieDetail[];
  newSchedule: Schedule = new Schedule();
  scheduleAddForm: FormGroup;

  cinemaHallId: string;
  movieTitle: string;
  selectedTime: Date;
  selectedEndDate: Date;
  selectedStartDate: Date;

  ngOnInit(): void {
    this.cinemahallService.getAll().subscribe(result => this.cinemaHalls = result);
    this.movieService.getAll().subscribe(result => {
      this.movies = result
      this.options = result;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''), map(value => this._filter(value))
      );
    });

    this.scheduleAddForm = new FormGroup({
      startdate : new FormControl('', [Validators.required]),
      enddate: new FormControl('', [Validators.required]),
      time : new FormControl('', [Validators.required]),
      movie: new FormControl('', [Validators.required]),
      cinemahall: new FormControl('', [Validators.required])
    });
  }

  onCloseClick(): void {
    this.dialogRef.close( { save: false, data: {} } );
  }

  onSaveClick() : void {
    this.dialogRef.close( { save: true, data: { schedules: this.generateSchedules() } } );
  }

  checkError = (controlName: string, errorName: string) => {
    return this.scheduleAddForm.controls[controlName].hasError(errorName);
  }

  _filter(value: string): MovieDetail[] {
    const filterValue = value.toLowerCase();
    console.log(value);
    return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
  }

  generateSchedules() : Schedule[] {
    let schedules: Schedule[] = [];
    for (var currentDate = this.selectedStartDate; currentDate <= this.selectedEndDate; currentDate.setDate(currentDate.getDate() + 1)) {
      let schedule: Schedule = new Schedule();
      currentDate.setHours(this.selectedTime.getHours());
      currentDate.setMinutes(this.selectedTime.getMinutes());
      schedule.startTime = new Date(currentDate);
      this.movies.forEach(
        movie => movie.title == this.movieTitle ? schedule.movieId = movie.id : null
      );
      schedule.cinemaHallId = this.cinemaHallId;
      schedules.push(schedule);
    }
    return schedules;
  }

}
