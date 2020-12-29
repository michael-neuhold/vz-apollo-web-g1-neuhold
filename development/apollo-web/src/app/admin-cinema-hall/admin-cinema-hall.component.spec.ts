import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCinemaHallComponent } from './admin-cinema-hall.component';

describe('AdminCinemaHallComponent', () => {
  let component: AdminCinemaHallComponent;
  let fixture: ComponentFixture<AdminCinemaHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCinemaHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCinemaHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
