import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailSchedulesComponent } from './movie-detail-schedules.component';

describe('MovieDetailSchedulesComponent', () => {
  let component: MovieDetailSchedulesComponent;
  let fixture: ComponentFixture<MovieDetailSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
