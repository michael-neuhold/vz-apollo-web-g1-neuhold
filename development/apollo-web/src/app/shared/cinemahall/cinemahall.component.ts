import { Component, Input, OnInit } from '@angular/core';
import { Size } from 'src/app/domains/cinemahall';
import { Seat } from 'src/app/domains/seat';

@Component({
  selector: 'app-cinemahall',
  templateUrl: './cinemahall.component.html',
  styleUrls: ['./cinemahall.component.css']
})
export class CinemahallComponent implements OnInit {

  constructor() { }

  @Input() seats: Seat[];
  @Input() size: Size;

  ngOnInit(): void {
  }

}
