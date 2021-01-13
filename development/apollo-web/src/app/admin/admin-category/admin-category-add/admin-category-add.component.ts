import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/domains/category';

@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.css']
})
export class AdminCategoryAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminCategoryAddComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  newCategory: Category = new Category();
  icons : string[] = ['Seatbelt', 'SofaSingle', 'SeatOutline'];

  onCloseClick(): void {
    this.dialogRef.close({ save: false, data: {}});
  }

  onSaveClick() : void {
    this.dialogRef.close({ save: true, data: this.newCategory });
  }

  ngOnInit(): void {
  }

}

