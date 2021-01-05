import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminCinemaHallAddComponent } from '../admin-cinema-hall-add/admin-cinema-hall-add.component';
import { AdminCinemaHallEditComponent } from '../admin-cinema-hall-edit/admin-cinema-hall-edit.component';


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

  ngOnInit(): void { }

  constructor(public dialog: MatDialog) {}

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AdminCinemaHallAddComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(AdminCinemaHallEditComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}

