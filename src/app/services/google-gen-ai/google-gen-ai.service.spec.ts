import { TestBed } from '@angular/core/testing';

import { GoogleGenAiService } from './google-gen-ai.service';

describe('GoogleGenAiService', () => {
  let service: GoogleGenAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleGenAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
