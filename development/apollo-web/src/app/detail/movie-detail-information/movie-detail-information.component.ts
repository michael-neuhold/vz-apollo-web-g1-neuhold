import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from 'src/app/domains/movie';

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
