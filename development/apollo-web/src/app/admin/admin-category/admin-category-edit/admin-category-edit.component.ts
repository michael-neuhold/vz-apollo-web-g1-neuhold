import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/domains/category';

@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.css']
})
export class AdminCategoryEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminCategoryEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
  {}

  // data
  editCategory: Category;
  icons : string[] = ['Seatbelt', 'SofaSingle', 'SeatOutline'];
  categoryEditForm: FormGroup;

  ngOnInit(): void {
    this.editCategory = Object.assign({}, this.data);
    this.categoryEditForm = new FormGroup({
      categoryDescription: new FormControl('', [Validators.required]),
      categoryPrice: new FormControl('', [Validators.required, Validators.pattern('^([0-9]*(\.[0-9]{1,2})?)')]),
      categoryIcon: new FormControl('', [Validators.required])
    });
  }

  onCloseClick(): void {
    this.dialogRef.close( { save: false, data: {} } );
  }

  onSaveClick() : void {
    this.editCategory.description = this.editCategory.description.trim();
    this.dialogRef.close( { save: true, data: this.editCategory} );
  }

  checkError = (controlName: string, errorName: string) => {
    return this.categoryEditForm.controls[controlName].hasError(errorName);
  }

}
