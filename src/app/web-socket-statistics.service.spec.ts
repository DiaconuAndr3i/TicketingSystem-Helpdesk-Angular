import { TestBed } from '@angular/core/testing';

import { WebSocketStatisticsService } from './web-socket-statistics.service';

describe('WebSocketStatisticsService', () => {
  let service: WebSocketStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
