import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from '../../services/movie/movie.service';

@Component({
  selector: 'app-movie-detail-information',
  templateUrl: './movie-detail-information.component.html',
  styleUrls: ['./movie-detail-information.component.css']
})
export class MovieDetailInformationComponent implements OnInit {

  constructor() { }

  @Input() movie : MovieDetail;

  ngOnInit(): void {
  }

}
