import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarMessageService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, styleClass: string) {
    this.snackBar.open(message, null, {
      duration: 5000,
      panelClass: [styleClass]
    });
  }
}
