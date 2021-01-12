import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-schedule-edit',
  templateUrl: './admin-schedule-edit.component.html',
  styleUrls: ['./admin-schedule-edit.component.css']
})
export class AdminScheduleEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminScheduleEditComponent>,
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
