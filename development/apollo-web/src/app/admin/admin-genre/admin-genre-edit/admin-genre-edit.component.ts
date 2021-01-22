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
    private dialogRef: MatDialogRef<AdminGenreEditComponent>,
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

  public onCloseClick(): void {
    this.dialogRef.close( { save: false, data: {} } );
  }

  public onSaveClick() : void {
    this.genre.name = this.genre.name.trim();
    this.dialogRef.close( { save: true, data: this.genre } );
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.genreEditForm.controls[controlName].hasError(errorName);
  }

}
