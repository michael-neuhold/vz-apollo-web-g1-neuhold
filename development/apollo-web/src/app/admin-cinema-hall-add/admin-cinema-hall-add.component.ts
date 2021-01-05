import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-cinema-hall-add',
  templateUrl: './admin-cinema-hall-add.component.html',
  styleUrls: ['./admin-cinema-hall-add.component.css']
})
export class AdminCinemaHallAddComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminCinemaHallAddComponent>,
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
