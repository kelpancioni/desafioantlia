import { TestBed } from '@angular/core/testing';

import { CepRepository } from './cep-repository';

describe('CepRepositoryService', () => {
  let service: CepRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
