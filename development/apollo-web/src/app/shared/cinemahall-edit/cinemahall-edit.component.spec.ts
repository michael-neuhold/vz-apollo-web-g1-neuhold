import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemahallEditComponent } from './cinemahall-edit.component';

describe('CinemahallEditComponent', () => {
  let component: CinemahallEditComponent;
  let fixture: ComponentFixture<CinemahallEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemahallEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemahallEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
