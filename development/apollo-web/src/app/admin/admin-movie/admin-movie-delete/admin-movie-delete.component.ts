import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieDetail } from 'src/app/domains/movie';

@Component({
  selector: 'app-admin-movie-delete',
  templateUrl: './admin-movie-delete.component.html',
  styleUrls: ['./admin-movie-delete.component.css']
})
export class AdminMovieDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminMovieDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
  {}

  // data
  movie: MovieDetail;

  ngOnInit(): void {
    this.movie = this.data;
  }

  onCloseClick() {
    this.dialogRef.close( { delete: false, data: { } } );
  }

  onSaveClick() {
    this.dialogRef.close( { delete: true, data: { } } );
  }

}
