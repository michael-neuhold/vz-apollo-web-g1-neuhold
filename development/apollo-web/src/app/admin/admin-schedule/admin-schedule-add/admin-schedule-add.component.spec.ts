import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScheduleAddComponent } from './admin-schedule-add.component';

describe('AdminScheduleAddComponent', () => {
  let component: AdminScheduleAddComponent;
  let fixture: ComponentFixture<AdminScheduleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminScheduleAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminScheduleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
