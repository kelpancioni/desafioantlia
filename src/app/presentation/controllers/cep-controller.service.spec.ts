import { TestBed } from '@angular/core/testing';

import { CepControllerService } from './cep-controller.service';

describe('CepControllerService', () => {
  let service: CepControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
