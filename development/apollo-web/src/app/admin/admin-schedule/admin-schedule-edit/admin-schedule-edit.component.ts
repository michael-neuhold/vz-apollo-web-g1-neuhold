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

  constructor(
    private datepipe: DatePipe,
    private dialogRef: MatDialogRef<AdminScheduleAddComponent>,@Inject(MAT_DIALOG_DATA)
    private data: any,
    private cinemahallService: CinemahallService,
    private movieService: MovieService)
  {}

  // form data
  options: MovieDetail[] = [];
  filteredOptions: Observable<MovieDetail[]>;
  cinemaHalls: CinemaHall[];
  movies: MovieDetail[];
  movieTitle: string;
  editSchedule: Schedule;
  selectedTime: string;
  scheduleAddForm: FormGroup;

  ngOnInit(): void {
    console.log(this.data);
    this.editSchedule = this.data;
    this.cinemahallService.getAll().subscribe(result => this.cinemaHalls = result);

    this.scheduleAddForm = new FormGroup({
      date : new FormControl(this.editSchedule.startTime, [Validators.required]),
      time : new FormControl('', [Validators.required]),
      movie: new FormControl(this.editSchedule.movieTitle, [Validators.required]),
      cinemahall: new FormControl(this.editSchedule.cinemaHallId, [Validators.required])
    });

    this.movieService.getAll().subscribe(result => {
      this.movies = result
      this.options = result;
      this.filteredOptions = this.scheduleAddForm.controls['movie'].valueChanges.pipe(
        startWith(''), map(value => this._filter(value))
      );
      this.scheduleAddForm.controls['movie'].setValue(this.data.movieTitle);
    });
  }

  public onCloseClick(): void {
    this.dialogRef.close( { save: false, data: {} } );
  }

  public onSaveClick() : void {
    this.dialogRef.close( { save: true, data: this.generateSchedule() } );
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.scheduleAddForm.controls[controlName].hasError(errorName);
  }

  private _filter(value: string): MovieDetail[] {
    const filterValue = value.toLowerCase();
    console.log(value);
    return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
  }

  private generateSchedule() : Schedule {
    let currentDate: Date = new Date(this.scheduleAddForm.get('date').value);
    let selectedTime: Date = new Date(this.scheduleAddForm.get('time').value);
    let selectedHour: number = selectedTime.getHours() + 1;
    let selectedMinute: number = selectedTime.getMinutes();
    currentDate.setHours(selectedHour);
    currentDate.setMinutes(selectedMinute);

    let editedSchedule: Schedule = new Schedule();
    editedSchedule.cinemaHallId = this.scheduleAddForm.get('cinemahall').value;
    this.movies.forEach(
      movie => movie.title == this.scheduleAddForm.controls['movie'].value ? editedSchedule.movieId = movie.id : null
    );
    this.cinemahallService.getById(this.scheduleAddForm.controls['cinemahall'].value).subscribe(
      result => editedSchedule.cinemaHallVersionId = result.versionId
    );
    editedSchedule.startTime = currentDate;
    editedSchedule.id = this.data.id;
    console.log('Schedule: ',editedSchedule);
    return editedSchedule;
  }

}
