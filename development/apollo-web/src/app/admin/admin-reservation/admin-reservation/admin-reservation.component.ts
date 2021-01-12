import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminReservationDetailsComponent } from '../admin-reservation-details/admin-reservation-details.component';
import { ReservationService } from '../../../services/reservation/reservation.service';

@Component({
  selector: 'app-admin-reservation',
  templateUrl: './admin-reservation.component.html',
  styleUrls: ['./admin-reservation.component.css']
})
export class AdminReservationComponent implements OnInit {

  constructor(public dialog: MatDialog, private reservationService: ReservationService) { }

  allReservations = [];
  displayedColumns: string[] = ['id', 'reservationDate', 'scheduleId', 'movieId', 'movieTitle', 'info'];

  openDetailDialog(reservationId): void {
    const dialogRef = this.dialog.open(AdminReservationDetailsComponent, { data: { id: reservationId }});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.reservationService.getAll().subscribe(res => this.allReservations = res)
  }

}
