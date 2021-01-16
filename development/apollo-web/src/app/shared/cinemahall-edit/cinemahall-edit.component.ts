import { NumberSymbol } from '@angular/common';
import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/domains/category';
import { Size } from 'src/app/domains/cinemahall';
import { Seat } from 'src/app/domains/seat';
import { CategoryService } from 'src/app/services/category/category.service';
import { CinemahallService } from 'src/app/services/cinemahall/cinemahall.service';
import { CoronaSettingsComponent } from '../corona-settings/corona-settings.component';

@Component({
  selector: 'app-cinemahall-edit',
  templateUrl: './cinemahall-edit.component.html',
  styleUrls: ['./cinemahall-edit.component.css']
})
export class CinemahallEditComponent implements OnInit {

  constructor(private categoryService: CategoryService, private cinemahallService: CinemahallService, public dialog: MatDialog,) { }

  @Input() seats: Seat[];
  @Input() size: Size;
  @Output() saveSeats = new EventEmitter<Seat[]>();

  categories: Category[];
  seatInformation = [
    {id: 1, name: 'available'},
    {id: 3, name: 'corona'},
    {id: 4, name: 'not available'}
  ]

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(result => this.categories = result);
  }

  getColorForSeatInformation(seatinformation: number) {
    if (seatinformation == 3) return 'red';
    else if (seatinformation == 4) return 'lightgray';
    else return 'black';
  }

  onSeatInformationChange(seat: Seat, value: number) {
    seat.seatInformationId = value;
  }

  onCategoryChange(cardRow: number, categoryId: string) {
    let targetRow = this.size.x - cardRow - 1;
    this.seats.forEach(seat => {
      if (seat.coordinate.y == targetRow) {
        seat.categoryId = categoryId;
      }
    })
  }

  onCorona() {
    console.log("open dialog for corona");

    const dialogRef = this.dialog.open(CoronaSettingsComponent, { data: {} });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result.save) {
        this.categoryService.update(result.data).subscribe(() => console.log("close"))
      }
    });
  }

  onSave() {
    this.saveSeats.emit(this.seats);
  }

}
