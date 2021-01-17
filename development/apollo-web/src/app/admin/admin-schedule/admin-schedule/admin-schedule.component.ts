import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Schedule } from 'src/app/domains/schedule';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { AdminScheduleAddComponent } from '../admin-schedule-add/admin-schedule-add.component';
import { AdminScheduleEditComponent } from '../admin-schedule-edit/admin-schedule-edit.component';

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.component.html',
  styleUrls: ['./admin-schedule.component.css']
})
export class AdminScheduleComponent implements OnInit {

  constructor(public dialog: MatDialog, private scheduleService: ScheduleService) {}

  allSchedules: Schedule[];

  displayedColumns: string[] = ['id', 'movieId', 'movieTitle' /*, 'movieOriginalTitle'*/, 'movieLength', 'cinemaHallId', 'startTime'];

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AdminScheduleAddComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result.save == true ) {
        this.saveNewSchedules(result.data.schedules);
      }
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(AdminScheduleEditComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.scheduleService.getAll().subscribe(result => this.allSchedules = result);
  }

  saveNewSchedules(schedules: Schedule[]) {
    schedules.forEach( schedule => {
      this.scheduleService.create(schedule).subscribe( result => console.log(result));
    });
  }

}
