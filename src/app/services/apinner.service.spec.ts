import {TestBed} from '@angular/core/testing';

import {ApinnerService} from './apinner.service';

describe('ApinnerService', () => {
  let service: ApinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
