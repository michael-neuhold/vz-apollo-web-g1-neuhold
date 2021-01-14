import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reservation } from 'src/app/domains/reservation';
import { ReservationService } from '../../../services/reservation/reservation.service';

@Component({
  selector: 'app-admin-reservation-details',
  templateUrl: './admin-reservation-details.component.html',
  styleUrls: ['./admin-reservation-details.component.css']
})
export class AdminReservationDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminReservationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private reservationService: ReservationService) {}


  onCloseClick(): void {
    this.dialogRef.close("CLOSED");
  }

  reservation: Reservation;

  ngOnInit(): void {
    this.reservationService.getById(this.data.id).subscribe(res => this.reservation = res)
  }

}
