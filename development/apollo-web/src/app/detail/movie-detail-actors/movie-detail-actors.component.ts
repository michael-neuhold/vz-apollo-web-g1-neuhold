import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/domains/movie';
import { MovieService } from '../../services/movie/movie.service';

@Component({
  selector: 'app-movie-detail-actors',
  templateUrl: './movie-detail-actors.component.html',
  styleUrls: ['./movie-detail-actors.component.css']
})
export class MovieDetailActorsComponent implements OnInit {

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  Dummy : string[] = ["Test1", "Test2", "Test3", "Test4"];

  @Input() movie : MovieDetail;

  ngOnInit(): void {
      this.route.params.subscribe(params => this.movieService.getById(params['id']).subscribe(res => this.movie = res));
  }

}
