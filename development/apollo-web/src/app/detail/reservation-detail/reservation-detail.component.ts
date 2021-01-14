import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/domains/reservation';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {

  constructor(private reservationService: ReservationService, private route: ActivatedRoute) { }

  reservation: Reservation;

  ngOnInit(): void {
    this.route.params.subscribe(params => this.reservationService.getById(params['id']).subscribe(result => this.reservation = result));
  }

}
