import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CinemaHall } from 'src/app/domains/cinemahall';
import { MovieDetail } from 'src/app/domains/movie';
import { CinemahallService } from 'src/app/services/cinemahall/cinemahall.service';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-admin-schedule-add',
  templateUrl: './admin-schedule-add.component.html',
  styleUrls: ['./admin-schedule-add.component.css']
})
export class AdminScheduleAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminScheduleAddComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private cinemahallService: CinemahallService, private movieService: MovieService) {}

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  cinemaHalls: CinemaHall[];
  movies: MovieDetail[];

  onCloseClick(): void {
    this.dialogRef.close("CLOSED");
  }

  onSaveClick() : void {
    this.dialogRef.close("SAVED");
  }

  ngOnInit(): void {
    this.cinemahallService.getAll().subscribe(result => this.cinemaHalls = result);
    this.movieService.getAll().subscribe(result => {
      this.movies = result
      this.movies.forEach( movie => this.options.push(movie.title));
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''), map(value => this._filter(value))
      );
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
