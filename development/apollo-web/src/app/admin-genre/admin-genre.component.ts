import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminGenreAddComponent } from '../admin-genre-add/admin-genre-add.component';
import { AdminGenreEditComponent } from '../admin-genre-edit/admin-genre-edit.component';
import { Genre, GenreService } from '../services/genre.service';

import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-admin-genre',
  templateUrl: './admin-genre.component.html',
  styleUrls: ['./admin-genre.component.css']
})
export class AdminGenreComponent implements OnInit {

  constructor(public dialog: MatDialog, private genreService: GenreService) {}

  allGenre = [];
  displayedColumns: string[] = ['id', 'name', 'edit'];

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AdminGenreAddComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(AdminGenreEditComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(res => this.allGenre = res)
  }

}
