import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailInformationComponent } from './movie-detail-information.component';

describe('MovieDetailInformationComponent', () => {
  let component: MovieDetailInformationComponent;
  let fixture: ComponentFixture<MovieDetailInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
