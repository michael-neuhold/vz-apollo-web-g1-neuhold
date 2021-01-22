import { Component, OnInit } from '@angular/core';
import { CinemaHall, CinemaHallDetailed } from 'src/app/domains/cinemahall';
import { Seat } from 'src/app/domains/seat';
import { CinemahallService } from 'src/app/services/cinemahall/cinemahall.service';

@Component({
  selector: 'app-admin-cinema-hall-edit',
  templateUrl: './admin-cinema-hall-edit.component.html',
  styleUrls: ['./admin-cinema-hall-edit.component.css']
})
export class AdminCinemaHallEditComponent implements OnInit {

  constructor(private cinemahallService: CinemahallService) {}

  // data
  cinemaHalls: CinemaHall[];
  selectedCinemaHallId: string;
  cinemaHallDetailed: CinemaHallDetailed;
  seats: Seat[];

  ngOnInit(): void {
    this.updateView();
  }

  public updateView() {
    this.cinemahallService.getAll().subscribe(
      result => {
        this.cinemaHalls = result;
        this.selectedCinemaHallId = result[0].id;
        this.getCinemaHallDetailed(result[0].id);
      });
  }

  public getCinemaHallDetailed(id: string) {
    this.cinemahallService.getById(id).subscribe(
      result => {
        this.cinemaHallDetailed = result;
        if(result != null)
          this.getSeats(result.versionId);
    });
  }

  private getSeats(versionId: number) {
    this.cinemahallService.getSeats(versionId).subscribe(
      result => {
        this.seats = result;
    });
  }

  public onCinemaHallChange() {
    this.getCinemaHallDetailed(this.selectedCinemaHallId)
  }

  public onSave(seats: Seat[]) {
    this.cinemaHallDetailed.seats = seats;
    this.cinemahallService.update(this.cinemaHallDetailed).subscribe(() => this.updateView());
  }

}
