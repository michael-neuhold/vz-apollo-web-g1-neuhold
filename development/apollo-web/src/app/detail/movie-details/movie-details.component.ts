import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/domains/movie';
import { MovieService } from '../../services/movie/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, private movieService: MovieService, private route: ActivatedRoute) { }

  columns : number = 4;
  item1 : number = 1;
  item2 : number = 3;

  movie : MovieDetail;

  ngOnInit(): void {

      this.route.params.subscribe(params => this.movieService.getById(params['id']).subscribe(res => this.movie = res));

      this.breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
      ]).subscribe( (state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
            this.columns = 1;
            this.item1 = 1;
            this.item2 = 1;
        } else
        if (state.breakpoints[Breakpoints.Small]) {
            this.columns = 4;
            this.item1 = 2;
            this.item2 = 2;
        } else
        if (state.breakpoints[Breakpoints.Medium]) {
          this.columns = 4;
          this.item1 = 2;
          this.item2 = 2;
        } else
        if (state.breakpoints[Breakpoints.Large]) {

          this.columns = 4;
          this.item1 = 1;
          this.item2 = 3;
        } else
        if (state.breakpoints[Breakpoints.XLarge]) {
            this.columns = 4;
            this.item1 = 1;
            this.item2 = 3;
        }
      });
    }

}
