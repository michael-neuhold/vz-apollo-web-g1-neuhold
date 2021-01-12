import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-genre-add',
  templateUrl: './admin-genre-add.component.html',
  styleUrls: ['./admin-genre-add.component.css']
})
export class AdminGenreAddComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminGenreAddComponent>,
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
