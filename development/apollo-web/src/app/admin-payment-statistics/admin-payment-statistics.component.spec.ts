import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentStatisticsComponent } from './admin-payment-statistics.component';

describe('AdminPaymentStatisticsComponent', () => {
  let component: AdminPaymentStatisticsComponent;
  let fixture: ComponentFixture<AdminPaymentStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPaymentStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaymentStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
