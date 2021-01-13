import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/domains/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { AdminCategoryAddComponent } from '../admin-category-add/admin-category-add.component';
import { AdminCategoryEditComponent } from '../admin-category-edit/admin-category-edit.component';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  constructor(public dialog: MatDialog, private categoryService: CategoryService) {}

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AdminCategoryAddComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(AdminCategoryEditComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  allCategories: Category[];
  displayedColumns: string[] = ['id', 'description', 'price', 'iconName', 'edit'];

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(res => this.allCategories = res);
  }

}
