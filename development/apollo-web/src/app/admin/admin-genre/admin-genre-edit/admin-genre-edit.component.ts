import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-genre-edit',
  templateUrl: './admin-genre-edit.component.html',
  styleUrls: ['./admin-genre-edit.component.css']
})
export class AdminGenreEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminGenreEditComponent>,
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
