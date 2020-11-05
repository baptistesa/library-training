import { TestBed } from '@angular/core/testing';

import { MyHeaderService } from './my-header.service';

describe('MyHeaderService', () => {
  let service: MyHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
