import { TestBed } from '@angular/core/testing';

import { EmailSetupService } from './email-setup.service';

describe('EmailSetupService', () => {
  let service: EmailSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
