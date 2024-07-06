import { TestBed } from '@angular/core/testing';

import { ContextedCoreContentService } from './contexted-core-content.service';

describe('ContextedCoreContentService', () => {
  let service: ContextedCoreContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContextedCoreContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
