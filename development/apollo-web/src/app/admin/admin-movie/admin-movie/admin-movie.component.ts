import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetail } from 'src/app/domains/movie';
import { MovieService } from 'src/app/services/movie/movie.service';
import { AdminMovieAddComponent } from '../admin-movie-add/admin-movie-add.component';
import { AdminMovieDeleteComponent } from '../admin-movie-delete/admin-movie-delete.component';

@Component({
  selector: 'app-admin-movie',
  templateUrl: './admin-movie.component.html',
  styleUrls: ['./admin-movie.component.css']
})
export class AdminMovieComponent implements OnInit {

  constructor(public dialog: MatDialog, private movieService: MovieService) {}

  // data
  allMovies: MovieDetail[];
  displayedColumns: string[] = ['id', 'title', 'originalTitle', 'genre', 'length', 'delete', 'details'];

  ngOnInit(): void {
    this.loadTable();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AdminMovieAddComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result.save) {
        this.movieService.create(result.data).subscribe(res => this.loadTable());
      }
    });
  }

  onDeleteMovie(movie: MovieDetail): void {
    const dialogRef = this.dialog.open(AdminMovieDeleteComponent, { data: movie });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result.delete) {
        this.movieService.delete(movie.id).subscribe(res =>  this.loadTable());
      }
    });
  }

  loadTable() {
    this.movieService.getAll().subscribe(res => this.allMovies = res);
  }

}
