import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOverviewFilterComponent } from './movie-overview-filter.component';

describe('MovieOverviewFilterComponent', () => {
  let component: MovieOverviewFilterComponent;
  let fixture: ComponentFixture<MovieOverviewFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieOverviewFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieOverviewFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
