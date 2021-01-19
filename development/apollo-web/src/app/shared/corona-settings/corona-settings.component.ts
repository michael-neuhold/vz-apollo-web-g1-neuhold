import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Seat } from 'src/app/domains/seat';

@Component({
  selector: 'app-corona-settings',
  templateUrl: './corona-settings.component.html',
  styleUrls: ['./corona-settings.component.css']
})
export class CoronaSettingsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CoronaSettingsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  coronaSettings = [
    { id: 0, name: 'chessboard', seats: ['black', 'red', 'black', 'red', 'black', 'red', 'black', 'red', 'black'] },
    { id: 1, name: 'alternately', seats: ['black', 'red', 'black', 'black', 'red', 'black', 'black', 'red', 'black'] },
    { id: 2, name: 'no restrictions', seats: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'] }
  ];

  onApplyCoronaSettings(settingId: number): void {
    let newSeats;
    if(settingId == 0) newSeats = this.applyChessboard();
    if(settingId == 1) newSeats = this.applyAlternately();
    if(settingId == 2) newSeats = this.applyNoRestrictions();
    this.dialogRef.close({ save: false, data: newSeats });
  }

  applyChessboard(): Seat[] {
    this.applyNoRestrictions();
    this.data.forEach(seat => {
      if(seat.seatInformationId != 3 && seat.seatInformationId != 4) {
        if(seat.coordinate.x % 2 == 0) {
          if(seat.coordinate.y % 2 == 0)
            seat.seatInformationId = 3;
        } else {
          if(seat.coordinate.y % 2 != 0)
            seat.seatInformationId = 3;
        }
      }
    });
    return this.data;
  }

  applyAlternately(): Seat[] {
    this.applyNoRestrictions();
    this.data.forEach(seat => {
      if(seat.seatInformationId != 3 && seat.seatInformationId != 4) {
        if(seat.coordinate.x % 2 == 0) {
          seat.seatInformationId = 3;
        }
      }
    });
    return this.data;
  }

  applyNoRestrictions(): Seat[] {
    this.data.forEach(seat => {
      if(seat.seatInformationId != 4)
        seat.seatInformationId = 1;
    });
    return this.data;
  }

  ngOnInit(): void {
  }

}
