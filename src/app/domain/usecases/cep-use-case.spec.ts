import { TestBed } from '@angular/core/testing';

import { CepUseCase } from './cep-use-case';

describe('CepUseCaseService', () => {
  let service: CepUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
