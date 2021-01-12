import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminScheduleAddComponent } from '../admin-schedule-add/admin-schedule-add.component';
import { AdminScheduleEditComponent } from '../admin-schedule-edit/admin-schedule-edit.component';

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.component.html',
  styleUrls: ['./admin-schedule.component.css']
})
export class AdminScheduleComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AdminScheduleAddComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(AdminScheduleEditComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
  }

}
