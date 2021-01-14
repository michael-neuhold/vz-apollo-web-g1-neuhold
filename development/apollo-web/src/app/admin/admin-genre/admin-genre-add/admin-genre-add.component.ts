import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Genre } from 'src/app/domains/genre';
import { updateErrorMessages } from 'src/app/validation/error-message-mapping';
import { GenreFormErrorMessages } from 'src/app/validation/genre-error-messages';

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
  @ViewChild('genreForm', {static: true}) genreForm: NgForm;
  errors: { [key: string]: string } = {};

  // event handler
  onCloseClick(): void {
    this.dialogRef.close( { save: false, data: {} } );
  }

  onSaveClick() : void {
    this.dialogRef.close( { save: true, data: this.newGenre } );
  }

  // init
  ngOnInit(): void {
    this.genreForm.statusChanges.subscribe(
      () => this.errors = updateErrorMessages(GenreFormErrorMessages, this.genreForm)
    );
  }

}
