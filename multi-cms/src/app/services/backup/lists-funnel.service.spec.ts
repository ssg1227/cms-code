import { TestBed } from '@angular/core/testing';

import { ListsFunnelService } from './lists-funnel.service';

describe('ListFunnelService', () => {
  let service: ListsFunnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListsFunnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
