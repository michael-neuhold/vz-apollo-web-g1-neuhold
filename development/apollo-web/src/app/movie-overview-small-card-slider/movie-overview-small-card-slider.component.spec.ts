import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOverviewSmallCardSliderComponent } from './movie-overview-small-card-slider.component';

describe('MovieOverviewSmallCardSliderComponent', () => {
  let component: MovieOverviewSmallCardSliderComponent;
  let fixture: ComponentFixture<MovieOverviewSmallCardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieOverviewSmallCardSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieOverviewSmallCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
