import { TestBed } from '@angular/core/testing';

import { RazorpayService } from './razorpay-service.service';

describe('RazorpayServiceService', () => {
  let service: RazorpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RazorpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
