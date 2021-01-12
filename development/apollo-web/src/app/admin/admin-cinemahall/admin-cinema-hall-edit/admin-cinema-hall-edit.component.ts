import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-cinema-hall-edit',
  templateUrl: './admin-cinema-hall-edit.component.html',
  styleUrls: ['./admin-cinema-hall-edit.component.css']
})
export class AdminCinemaHallEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminCinemaHallEditComponent>,
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
