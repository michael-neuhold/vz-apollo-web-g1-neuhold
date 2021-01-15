import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CinemaHall, Size } from 'src/app/domains/cinemahall';

@Component({
  selector: 'app-admin-cinema-hall-add',
  templateUrl: './admin-cinema-hall-add.component.html',
  styleUrls: ['./admin-cinema-hall-add.component.css']
})
export class AdminCinemaHallAddComponent implements OnInit {

  constructor() {}

  newCinemaHall: CinemaHall = new CinemaHall('', new Size());

  ngOnInit(): void {
  }

}
