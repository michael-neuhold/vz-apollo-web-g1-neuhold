import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Genre } from 'src/app/domains/genre';

@Component({
  selector: 'app-admin-genre-edit',
  templateUrl: './admin-genre-edit.component.html',
  styleUrls: ['./admin-genre-edit.component.css']
})
export class AdminGenreEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminGenreEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
  {}

  // data
  genre: Genre;
  genreEditForm: FormGroup;

  ngOnInit(): void {
    this.genre = Object.assign({}, this.data);
    this.genreEditForm = new FormGroup({
      genreName: new FormControl('', [Validators.required]),
    });
  }

  onCloseClick(): void {
    this.dialogRef.close( { save: false, data: {} } );
  }

  onSaveClick() : void {
    this.dialogRef.close( { save: true, data: this.genre } );
  }

  checkError = (controlName: string, errorName: string) => {
    return this.genreEditForm.controls[controlName].hasError(errorName);
  }

}
