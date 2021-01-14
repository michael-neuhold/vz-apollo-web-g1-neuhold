import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Genre } from 'src/app/domains/genre';

@Component({
  selector: 'app-admin-genre-edit',
  templateUrl: './admin-genre-edit.component.html',
  styleUrls: ['./admin-genre-edit.component.css']
})
export class AdminGenreEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminGenreEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  genre: Genre;

  onCloseClick(): void {
    this.dialogRef.close( { save: false, data: {} } );
  }

  onSaveClick() : void {
    this.dialogRef.close( { save: true, data: this.genre } );
  }

  ngOnInit(): void {
    this.genre = Object.assign({}, this.data);
  }

}
