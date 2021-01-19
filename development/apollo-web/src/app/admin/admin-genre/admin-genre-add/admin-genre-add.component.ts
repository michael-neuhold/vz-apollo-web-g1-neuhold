import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Genre } from 'src/app/domains/genre';
import { GenreService } from 'src/app/services/genre/genre.service';
import { IdExistsValidator } from 'src/app/validation/validators/IdValidator';

@Component({
  selector: 'app-admin-genre-add',
  templateUrl: './admin-genre-add.component.html',
  styleUrls: ['./admin-genre-add.component.css']
})
export class AdminGenreAddComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminGenreAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private genreService: GenreService)
  {}

  // data
  newGenre: Genre = new Genre();
  genreAddForm: FormGroup;

  ngOnInit(): void {
    this.genreAddForm = new FormGroup({
      genreId : new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')],
        IdExistsValidator.createValidator(this.genreService)),
      genreName: new FormControl('', [Validators.required]),
    });
  }

  onCloseClick(): void {
    this.dialogRef.close( { save: false, data: {} } );
  }

  onSaveClick() : void {
    this.dialogRef.close( { save: true, data: this.newGenre } );
  }

  checkError = (controlName: string, errorName: string) => {
    return this.genreAddForm.controls[controlName].hasError(errorName);
  }

}
