import { TestBed, inject } from '@angular/core/testing';

import { SfdcService } from './sfdc.service';

describe('SfdcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SfdcService]
    });
  });

  it('should be created', inject([SfdcService], (service: SfdcService) => {
    expect(service).toBeTruthy();
  }));
});
