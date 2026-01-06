import { TestBed } from '@angular/core/testing';

import {Apiservice } from './apiservices';

describe('Apiservices', () => {
  let service: Apiservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apiservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
