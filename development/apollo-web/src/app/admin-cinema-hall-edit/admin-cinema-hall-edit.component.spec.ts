import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCinemaHallEditComponent } from './admin-cinema-hall-edit.component';

describe('AdminCinemaHallEditComponent', () => {
  let component: AdminCinemaHallEditComponent;
  let fixture: ComponentFixture<AdminCinemaHallEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCinemaHallEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCinemaHallEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
