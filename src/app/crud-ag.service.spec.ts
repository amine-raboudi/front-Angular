import { TestBed } from '@angular/core/testing';

import { CrudAgService } from './crud-ag.service';

describe('CrudAgService', () => {
  let service: CrudAgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudAgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
