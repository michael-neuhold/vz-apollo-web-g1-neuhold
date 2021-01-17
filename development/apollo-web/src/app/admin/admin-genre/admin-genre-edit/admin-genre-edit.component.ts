import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Genre } from 'src/app/domains/genre';
import { updateErrorMessages } from 'src/app/validation/error-message-mapping';
import { GenreFormErrorMessages } from 'src/app/validation/genre-error-messages';

@Component({
  selector: 'app-admin-genre-edit',
  templateUrl: './admin-genre-edit.component.html',
  styleUrls: ['./admin-genre-edit.component.css']
})
export class AdminGenreEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminGenreEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  // data
  genre: Genre;

  // form
  public genreEditForm: FormGroup;

  // event handler
  onCloseClick(): void {
    this.dialogRef.close( { save: false, data: {} } );
  }

  onSaveClick() : void {
    this.dialogRef.close( { save: true, data: this.genre } );
  }

  // init
  ngOnInit(): void {
    this.genre = Object.assign({}, this.data);
    this.genreEditForm = new FormGroup({
      genreName: new FormControl('', [Validators.required]),
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.genreEditForm.controls[controlName].hasError(errorName);
  }

}
