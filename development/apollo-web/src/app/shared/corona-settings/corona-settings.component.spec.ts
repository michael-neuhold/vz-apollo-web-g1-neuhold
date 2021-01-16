import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaSettingsComponent } from './corona-settings.component';

describe('CoronaSettingsComponent', () => {
  let component: CoronaSettingsComponent;
  let fixture: ComponentFixture<CoronaSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronaSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
