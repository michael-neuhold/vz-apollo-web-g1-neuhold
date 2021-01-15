import { Component, OnInit } from '@angular/core';
import { version } from 'process';
import { CinemaHall, CinemaHallDetailed } from 'src/app/domains/cinemahall';
import { Seat } from 'src/app/domains/seat';
import { CinemahallService } from 'src/app/services/cinemahall/cinemahall.service';

@Component({
  selector: 'app-admin-cinema-hall-show',
  templateUrl: './admin-cinema-hall-show.component.html',
  styleUrls: ['./admin-cinema-hall-show.component.css']
})
export class AdminCinemahallShowComponent implements OnInit {

  constructor(private cinemahallService: CinemahallService) { }

  // select cinemahall
  cinemaHalls: CinemaHall[];
  selectedCinemaHallId: string;

  // data for detailed cinemahall view
  cinemaHallDetailed: CinemaHallDetailed;
  seats: Seat[];

  ngOnInit(): void {
    this.cinemahallService.getAll().subscribe(
      result => {
        this.cinemaHalls = result;
        this.selectedCinemaHallId = result[0].id;
        this.getCinemaHallDetailed(result[0].id);
      });
  }

  getCinemaHallDetailed(id: string) {
    this.cinemahallService.getById(id).subscribe(
      result => {
        this.cinemaHallDetailed = result;
        console.log(result)
        this.getSeats(result.versionId);
    });
  }

  getSeats(versionId: number) {
    this.cinemahallService.getSeats(versionId).subscribe(
      result => {
        this.seats = result;
        console.log('seats:', this.seats)
    });
  }

}
