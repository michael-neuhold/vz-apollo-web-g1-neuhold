import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.css']
})
export class AdminCategoryAddComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminCategoryAddComponent>,
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
