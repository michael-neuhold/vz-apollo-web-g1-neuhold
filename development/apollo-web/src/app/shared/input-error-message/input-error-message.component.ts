import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-error-message',
  templateUrl: './input-error-message.component.html',
  styleUrls: ['./input-error-message.component.css']
})
export class InputErrorMessageComponent implements OnInit {

  constructor() { }

  @Input() error: string;

  ngOnInit(): void {
  }

}
