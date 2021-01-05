import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCinemaHallAddComponent } from './admin-cinema-hall-add.component';

describe('AdminCinemaHallAddComponent', () => {
  let component: AdminCinemaHallAddComponent;
  let fixture: ComponentFixture<AdminCinemaHallAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCinemaHallAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCinemaHallAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
