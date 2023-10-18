import { TestBed } from '@angular/core/testing';

import { FormBuilderControllerService } from './form-builder-controller.service';

describe('FormBuilderControllerService', () => {
  let service: FormBuilderControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBuilderControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
