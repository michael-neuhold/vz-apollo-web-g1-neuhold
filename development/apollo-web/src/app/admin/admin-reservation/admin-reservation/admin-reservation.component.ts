import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservationService } from '../../../services/reservation/reservation.service';

@Component({
  selector: 'app-admin-reservation',
  templateUrl: './admin-reservation.component.html',
  styleUrls: ['./admin-reservation.component.css']
})
export class AdminReservationComponent implements OnInit {

  constructor(public dialog: MatDialog, private reservationService: ReservationService) { }

  // data
  allReservations = [];
  displayedColumns: string[] = ['id', 'reservationDate', 'scheduleId', 'movieId', 'movieTitle', 'seats', 'info'];

  ngOnInit(): void {
    this.reservationService.getAll().subscribe(res => this.allReservations = res)
  }

}
