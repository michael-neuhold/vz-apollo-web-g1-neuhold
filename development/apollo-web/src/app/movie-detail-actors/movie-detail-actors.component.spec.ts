import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailActorsComponent } from './movie-detail-actors.component';

describe('MovieDetailActorsComponent', () => {
  let component: MovieDetailActorsComponent;
  let fixture: ComponentFixture<MovieDetailActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailActorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
