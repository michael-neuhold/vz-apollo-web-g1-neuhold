import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-schedule-add',
  templateUrl: './admin-schedule-add.component.html',
  styleUrls: ['./admin-schedule-add.component.css']
})
export class AdminScheduleAddComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminScheduleAddComponent>,
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
