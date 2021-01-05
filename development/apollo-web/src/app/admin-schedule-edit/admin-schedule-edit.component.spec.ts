import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScheduleEditComponent } from './admin-schedule-edit.component';

describe('AdminScheduleEditComponent', () => {
  let component: AdminScheduleEditComponent;
  let fixture: ComponentFixture<AdminScheduleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminScheduleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminScheduleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
