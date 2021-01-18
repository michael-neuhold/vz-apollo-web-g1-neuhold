import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/domains/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { IdValidator } from 'src/app/validation/validators/IdValidator';

@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.css']
})
export class AdminCategoryAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminCategoryAddComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private categoryService: CategoryService) {}

  newCategory: Category = new Category();
  icons : string[] = ['Seatbelt', 'SofaSingle', 'SeatOutline'];

  // form
  public categoryAddForm: FormGroup;

  onCloseClick(): void {
    this.dialogRef.close({ save: false, data: {}});
  }

  onSaveClick() : void {
    this.dialogRef.close({ save: true, data: this.newCategory });
  }

  ngOnInit(): void {
    this.categoryAddForm = new FormGroup({
      categoryName : new FormControl('', [Validators.required], IdValidator.createValidator(this.categoryService)),
      categoryDescription: new FormControl('', [Validators.required]),
      categoryPrice: new FormControl('', [Validators.required, Validators.pattern('^([0-9]*(\.[0-9]{1,2})?)')]),
      categoryIcon: new FormControl('', [Validators.required])
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    //console.log(this.categoryAddForm.controls);
    //console.log(controlName, this.categoryAddForm.controls[controlName].hasError(errorName));
    return this.categoryAddForm.controls[controlName].hasError(errorName);
  }

}

