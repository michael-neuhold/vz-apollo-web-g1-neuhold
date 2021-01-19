import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieDetail } from 'src/app/domains/movie';
import { GenreService } from 'src/app/services/genre/genre.service';
import { MovieService } from 'src/app/services/movie/movie.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Genre } from 'src/app/domains/genre';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IdExistsValidator } from 'src/app/validation/validators/IdValidator';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'app-admin-movie-add',
  templateUrl: './admin-movie-add.component.html',
  styleUrls: ['./admin-movie-add.component.css']
})
export class AdminMovieAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminMovieAddComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private genreService: GenreService, private movieService: MovieService) {}

  newMovie: MovieDetail = new MovieDetail();
  allGenre: Genre[];
  selectedGenre: Genre;

  // form
  public movieAddForm: FormGroup;

  onCloseClick(): void {
    this.dialogRef.close( { save: false, data: { } } );
  }

  onSaveClick() : void {
    this.newMovie.actors = this.actors.join(', ');
    this.uploadFiles();
    this.dialogRef.close( { save: true, data: this.newMovie });
  }

  uploadFiles() {
    let coverFilename = this.movieAddForm.controls['movieCover'].value;
    let coverHdFilename = this.movieAddForm.controls['movieCoverHd'].value;
    if(coverFilename != '') this.handleCoverImage(coverFilename);
    if(coverHdFilename != '') this.handleCoverImageHd(coverHdFilename);
  }

  handleCoverImage(filename: any) {
    var fileReader: FileReader = new FileReader();
    fileReader.onloadend = () => {
      this.newMovie.coverImage = (fileReader.result as string).split(',')[1];
    }
    fileReader.readAsDataURL(filename);
  }

  handleCoverImageHd(filename: any) {
    var fileReaderHd: FileReader = new FileReader();
    fileReaderHd.onloadend = () => {
      this.newMovie.coverImageHd = (fileReaderHd.result as string).split(',')[1];
    }
    fileReaderHd.readAsDataURL(filename);
  }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(result => this.allGenre = result);

    this.movieAddForm = new FormGroup({
      movieId : new FormControl('', [Validators.required, Validators.pattern(/[0-9]+/)], IdExistsValidator.createValidator(this.movieService)),
      movieTitle: new FormControl('', [Validators.required]),
      movieOriginalTitle: new FormControl('', [Validators.required]),
      movieDescription: new FormControl('', [Validators.required]),
      movieTrailer: new FormControl('', [Validators.pattern(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/)]),
      movieActors: new FormControl('', [this.actorValidator()]),
      movieLength: new FormControl('', [Validators.required, Validators.pattern(/[0-9]+/)]),
      movieGenre: new FormControl('', [Validators.required]),
      movieCover: new FormControl(''),
      movieCoverHd: new FormControl('')
    });
  }

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

    this.movieAddForm.controls['movieActors'].setValue(this.actors);
  }

  remove(actor: string): void {
    const index = this.actors.indexOf(actor);

    if (index >= 0) {
      this.actors.splice(index, 1);
    }
    this.movieAddForm.controls['movieActors'].setValue(this.actors);
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.movieAddForm.controls[controlName].hasError(errorName);
  }

  actorValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      console.log(this.actors);
      return this.actors.length == 0 ? { required: true } : null;
    };
  }

  copyTitle() {
    this.movieAddForm.controls['movieOriginalTitle'].setValue(this.movieAddForm.controls['movieTitle'].value);
  }

}
