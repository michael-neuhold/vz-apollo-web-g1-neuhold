import { Component, OnInit } from '@angular/core';


export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-admin-cinema-hall',
  templateUrl: './admin-cinema-hall.component.html',
  styleUrls: ['./admin-cinema-hall.component.css']
})
export class AdminCinemaHallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }



}

