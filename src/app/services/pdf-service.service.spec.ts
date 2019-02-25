import { TestBed } from '@angular/core/testing';

import { PdfServiceService } from './pdf-service.service';

describe('PdfServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfServiceService = TestBed.get(PdfServiceService);
    expect(service).toBeTruthy();
  });
});
