import { TestBed } from '@angular/core/testing';

import { TestUiLibraryService } from './test-ui-library.service';

describe('TestUiLibraryService', () => {
  let service: TestUiLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestUiLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
