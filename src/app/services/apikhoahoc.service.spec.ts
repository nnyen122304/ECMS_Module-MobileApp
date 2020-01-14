import { TestBed } from '@angular/core/testing';

import { ApikhoahocService } from './apikhoahoc.service';

describe('ApikhoahocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApikhoahocService = TestBed.get(ApikhoahocService);
    expect(service).toBeTruthy();
  });
});
