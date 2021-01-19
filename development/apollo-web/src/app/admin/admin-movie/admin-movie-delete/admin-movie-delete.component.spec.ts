import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieDeleteComponent } from './admin-movie-delete.component';

describe('AdminMovieDeleteComponent', () => {
  let component: AdminMovieDeleteComponent;
  let fixture: ComponentFixture<AdminMovieDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMovieDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMovieDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
