import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminGenreAddComponent } from '../admin-genre-add/admin-genre-add.component';
import { AdminGenreEditComponent } from '../admin-genre-edit/admin-genre-edit.component';
import { GenreService } from '../../../services/genre/genre.service';
import { Genre } from 'src/app/domains/genre';

@Component({
  selector: 'app-admin-genre',
  templateUrl: './admin-genre.component.html',
  styleUrls: ['./admin-genre.component.css']
})
export class AdminGenreComponent implements OnInit {

  constructor(public dialog: MatDialog, private genreService: GenreService) {}

  // data
  allGenre = [];
  displayedColumns: string[] = ['id', 'name', 'edit'];

  ngOnInit(): void {
    this.loadTable();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AdminGenreAddComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result.save) {
        this.genreService.create(result.data).subscribe(() => this.loadTable())
      }
    });
  }

  openEditDialog(genre: Genre): void {
    const dialogRef = this.dialog.open(AdminGenreEditComponent, { data: genre });
    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result.save) {
        this.genreService.update(result.data).subscribe(() => this.loadTable())
      }
    });
  }

  loadTable(): void {
    this.genreService.getAll().subscribe(res => this.allGenre = res)
  }

}
