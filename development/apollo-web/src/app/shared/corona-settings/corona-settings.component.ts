import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-corona-settings',
  templateUrl: './corona-settings.component.html',
  styleUrls: ['./corona-settings.component.css']
})
export class CoronaSettingsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CoronaSettingsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onCloseClick(): void {
    this.dialogRef.close({ save: false, data: {}});
  }

  onSaveClick() : void {
    this.dialogRef.close({ save: true, data: {} });
  }

  ngOnInit(): void {
  }

}
