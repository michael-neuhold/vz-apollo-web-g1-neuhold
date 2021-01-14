import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieDetail } from 'src/app/domains/movie';
import { Genre, GenreService } from 'src/app/services/genre/genre.service';
import { MovieService } from 'src/app/services/movie/movie.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-admin-movie-add',
  templateUrl: './admin-movie-add.component.html',
  styleUrls: ['./admin-movie-add.component.css']
})
export class AdminMovieAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminMovieAddComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private genreService: GenreService) {}

  newMovie: MovieDetail = new MovieDetail();
  allGenre: Genre[];
  selectedGenre: Genre;

  onCloseClick(): void {
    this.dialogRef.close( { save: false, data: {} } );
  }

  onSaveClick() : void {
    this.newMovie.actors = this.actors.join(', ');
    this.dialogRef.close( { save: true, data: this.newMovie });
  }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(result => this.allGenre = result);
  }


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  actors: string[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add actor
    if ((value || '').trim()) {
      this.actors.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(actor: string): void {
    const index = this.actors.indexOf(actor);

    if (index >= 0) {
      this.actors.splice(index, 1);
    }
  }



}
