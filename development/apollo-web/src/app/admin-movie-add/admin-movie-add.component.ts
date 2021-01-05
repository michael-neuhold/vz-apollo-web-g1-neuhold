import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-movie-add',
  templateUrl: './admin-movie-add.component.html',
  styleUrls: ['./admin-movie-add.component.css']
})
export class AdminMovieAddComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminMovieAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  onCloseClick(): void {
    this.dialogRef.close("CLOSED");
  }

  onSaveClick() : void {
    this.dialogRef.close("SAVED");
  }

  ngOnInit(): void {
  }

}
