import { TestBed } from '@angular/core/testing';

import { CinemahallService } from './cinemahall.service';

describe('CinemahallService', () => {
  let service: CinemahallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemahallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
