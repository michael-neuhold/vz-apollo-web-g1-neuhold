import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenreEditComponent } from './admin-genre-edit.component';

describe('AdminGenreEditComponent', () => {
  let component: AdminGenreEditComponent;
  let fixture: ComponentFixture<AdminGenreEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGenreEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
