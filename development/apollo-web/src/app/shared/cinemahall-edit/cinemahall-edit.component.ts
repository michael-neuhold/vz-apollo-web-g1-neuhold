import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/domains/category';
import { Size } from 'src/app/domains/cinemahall';
import { Seat } from 'src/app/domains/seat';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-cinemahall-edit',
  templateUrl: './cinemahall-edit.component.html',
  styleUrls: ['./cinemahall-edit.component.css']
})
export class CinemahallEditComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  @Input() seats: Seat[];
  @Input() size: Size;

  categories: Category[];

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

}
