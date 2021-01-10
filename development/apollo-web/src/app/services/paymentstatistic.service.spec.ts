import { TestBed } from '@angular/core/testing';

import { PaymentstatisticService } from './paymentstatistic.service';

describe('PaymentstatisticService', () => {
  let service: PaymentstatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentstatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
