import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOverviewLargeCardSliderComponent } from './movie-overview-large-card-slider.component';

describe('MovieOverviewLargeCardSliderComponent', () => {
  let component: MovieOverviewLargeCardSliderComponent;
  let fixture: ComponentFixture<MovieOverviewLargeCardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieOverviewLargeCardSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieOverviewLargeCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
