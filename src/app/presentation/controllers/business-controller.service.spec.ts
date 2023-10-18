import { TestBed } from '@angular/core/testing';

import { BusinessControllerService } from './business-controller.service';

describe('BusinessService', () => {
  let service: BusinessControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
