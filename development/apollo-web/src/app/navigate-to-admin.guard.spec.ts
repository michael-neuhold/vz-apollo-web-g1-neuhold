import { TestBed } from '@angular/core/testing';

import { NavigateToAdminGuard } from './navigate-to-admin.guard';

describe('NavigateToAdminGuard', () => {
  let guard: NavigateToAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NavigateToAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
