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
      if(result != undefined && result.save) {
        this.categoryService.create(result.data).subscribe(
          () => this.loadTable()
        );
      }
    });
  }

  openEditDialog(category: Category): void {
    const dialogRef = this.dialog.open(AdminCategoryEditComponent, { data: category});

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result.save) {
        this.categoryService.update(result.data).subscribe(
          () => this.loadTable()
        );
      }
    });
  }

  allCategories: Category[];
  displayedColumns: string[] = ['id', 'description', 'price', 'iconName', 'edit'];

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable(): void {
    this.categoryService.getAll().subscribe(res => this.allCategories = res);
  }

}
