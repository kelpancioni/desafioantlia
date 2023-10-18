import { TestBed } from '@angular/core/testing';

import { BusinessUseCase } from './business-use-case';

describe('BusinessUseCaseService', () => {
  let service: BusinessUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
