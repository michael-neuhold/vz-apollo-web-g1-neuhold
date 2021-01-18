import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Genre } from 'src/app/domains/genre';

@Component({
  selector: 'app-admin-genre-add',
  templateUrl: './admin-genre-add.component.html',
  styleUrls: ['./admin-genre-add.component.css']
})
export class AdminGenreAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminGenreAddComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  // data
  newGenre: Genre = new Genre();

  // form
  public genreAddForm: FormGroup;

  // event handler
  onCloseClick(): void {
    this.dialogRef.close( { save: false, data: {} } );
  }

  onSaveClick() : void {
    this.dialogRef.close( { save: true, data: this.newGenre } );
  }

  // init
  ngOnInit(): void {
    this.genreAddForm = new FormGroup({
      genreId : new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      genreName: new FormControl('', [Validators.required]),
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.genreAddForm.controls[controlName].hasError(errorName);
  }

}
