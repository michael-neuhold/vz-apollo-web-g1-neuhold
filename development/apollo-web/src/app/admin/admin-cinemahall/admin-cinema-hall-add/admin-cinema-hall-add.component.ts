import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CinemaHall, Size } from 'src/app/domains/cinemahall';
import { CinemahallService } from 'src/app/services/cinemahall/cinemahall.service';

@Component({
  selector: 'app-admin-cinema-hall-add',
  templateUrl: './admin-cinema-hall-add.component.html',
  styleUrls: ['./admin-cinema-hall-add.component.css']
})
export class AdminCinemaHallAddComponent implements OnInit {

  constructor(private cinemaHallService: CinemahallService) {}

  newCinemaHall: CinemaHall = new CinemaHall('', new Size());

  defaultSize: Size = new Size(15,20);
  useDefaultSize: boolean = false;

  ngOnInit(): void {
  }

  onUseDefaultSizeChange() {
    this.useDefaultSize = !this.useDefaultSize;
    if(this.useDefaultSize)
      this.newCinemaHall.size = this.defaultSize;
    else
      this.newCinemaHall.size = new Size();
  }

  onSave() {
    this.cinemaHallService.create(this.newCinemaHall).subscribe(result => console.log(result));
  }

}
