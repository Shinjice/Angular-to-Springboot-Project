import { TestBed } from '@angular/core/testing';

import { UserRegistationService } from './medewerker-aanmaken.service';

describe('UserRegistationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRegistationService = TestBed.get(UserRegistationService);
    expect(service).toBeTruthy();
  });
});
