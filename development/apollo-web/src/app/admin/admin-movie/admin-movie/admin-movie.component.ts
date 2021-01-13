import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetail } from 'src/app/domains/movie';
import { MovieService } from 'src/app/services/movie/movie.service';
import { AdminMovieAddComponent } from '../admin-movie-add/admin-movie-add.component';

@Component({
  selector: 'app-admin-movie',
  templateUrl: './admin-movie.component.html',
  styleUrls: ['./admin-movie.component.css']
})
export class AdminMovieComponent implements OnInit {

  constructor(public dialog: MatDialog, private movieService: MovieService) {}

  allMovies: MovieDetail[];
  displayedColumns: string[] = ['id', 'title', 'originalTitle', 'genre', 'length', 'edit', 'delete'];

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AdminMovieAddComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.movieService.getAll().subscribe(res => this.allMovies = res);
  }

}
