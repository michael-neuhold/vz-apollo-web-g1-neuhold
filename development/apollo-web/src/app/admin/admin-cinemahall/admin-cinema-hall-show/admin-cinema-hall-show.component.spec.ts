import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCinemahallShowComponent } from './admin-cinema-hall-show.component';

describe('AdminCinemahallShowComponent', () => {
  let component: AdminCinemahallShowComponent;
  let fixture: ComponentFixture<AdminCinemahallShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCinemahallShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCinemahallShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
