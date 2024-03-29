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

  // data
  allSchedules: Schedule[];
  displayedColumns: string[] = ['id', 'movieId', 'movieTitle', 'movieOriginalTitle', 'movieLength', 'cinemaHallId', 'startTime', 'edit'];

  ngOnInit(): void {
    this.loadTable();
  }

  public openAddDialog(): void {
    const dialogRef = this.dialog.open(AdminScheduleAddComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result.save == true ) {
        this.saveNewSchedules(result.data.schedules);
      }
    });
  }

  public openEditDialog(selectedSchedule: Schedule): void {
    const dialogRef = this.dialog.open(AdminScheduleEditComponent, { data: selectedSchedule });
    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result.save) {
        this.scheduleService.update(result.data).subscribe(() => this.loadTable());
      }
    });
  }

  private saveNewSchedules(schedules: Schedule[]) {
    schedules.forEach( schedule => {
      this.scheduleService.create(schedule).subscribe( () =>  this.loadTable());
    });
  }

  private loadTable() {
    this.scheduleService.getAll().subscribe(result => this.allSchedules = result);
  }

}
