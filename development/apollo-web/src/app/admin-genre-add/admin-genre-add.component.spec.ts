import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenreAddComponent } from './admin-genre-add.component';

describe('AdminGenreAddComponent', () => {
  let component: AdminGenreAddComponent;
  let fixture: ComponentFixture<AdminGenreAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGenreAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenreAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
