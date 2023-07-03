import { TestBed } from '@angular/core/testing';

import { JwtAuthorizedInterceptorService } from './jwt-authorized-interceptor.service';

describe('JwtAuthorizedInterceptorService', () => {
  let service: JwtAuthorizedInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtAuthorizedInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
