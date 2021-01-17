import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CinemaHall, Size } from 'src/app/domains/cinemahall';
import { CinemahallService } from 'src/app/services/cinemahall/cinemahall.service';
import { CinemaHallFormErrorMessages } from 'src/app/validation/cinemahall-error-message';
import { updateErrorMessages } from 'src/app/validation/error-message-mapping';

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

  // form
  public cinemaHallAddForm: FormGroup;

  ngOnInit(): void {
    this.cinemaHallAddForm = new FormGroup({
      cinemaHallName : new FormControl('', [Validators.required]),
      sizeRows: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      sizeSeats: new FormControl('', [Validators.required,  Validators.pattern('^[0-9]*$')])
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.cinemaHallAddForm.controls[controlName].hasError(errorName);
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
