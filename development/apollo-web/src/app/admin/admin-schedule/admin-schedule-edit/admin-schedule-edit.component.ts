import { DatePipe } from '@angular/common';
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
import { AdminScheduleAddComponent } from '../admin-schedule-add/admin-schedule-add.component';

@Component({
  selector: 'app-admin-schedule-edit',
  templateUrl: './admin-schedule-edit.component.html',
  styleUrls: ['./admin-schedule-edit.component.css']
})
export class AdminScheduleEditComponent implements OnInit {

  constructor(public datepipe: DatePipe, public dialogRef: MatDialogRef<AdminScheduleAddComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private cinemahallService: CinemahallService, private movieService: MovieService) {}

  // form data
  myControl = new FormControl();
  options: MovieDetail[] = [];
  filteredOptions: Observable<MovieDetail[]>;

  // autocomplete and cinemahall data
  cinemaHalls: CinemaHall[];
  movies: MovieDetail[];

  // schedule
  editSchedule: Schedule;

  selectedTime: Date;

  // form
  public scheduleAddForm: FormGroup;

  onCloseClick(): void {
    this.dialogRef.close( { save: false, data: {} } );
  }

  onSaveClick() : void {
    this.dialogRef.close( { save: true, data: { schedules: {} } } );
  }

  ngOnInit(): void {
    console.log(this.data);
    this.editSchedule = this.data;
    this.cinemahallService.getAll().subscribe(result => this.cinemaHalls = result);
    this.movieService.getAll().subscribe(result => {
      this.movies = result
      this.options = result;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''), map(value => this._filter(value))
      );
    });

    this.scheduleAddForm = new FormGroup({
      date : new FormControl(this.editSchedule.startTime, [Validators.required]),
      time : new FormControl('', [Validators.required]),
      movie: new FormControl(this.editSchedule.movieTitle, [Validators.required]),
      cinemahall: new FormControl(this.editSchedule.cinemaHallId, [Validators.required])
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.scheduleAddForm.controls[controlName].hasError(errorName);
  }

  private _filter(value: string): MovieDetail[] {
    const filterValue = value.toLowerCase();
    console.log(this.options);
    return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
  }

  /*
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
  */


}
