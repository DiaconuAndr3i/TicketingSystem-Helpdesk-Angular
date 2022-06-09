import { TestBed } from '@angular/core/testing';

import { ComunicationSidenavService } from './comunication-sidenav.service';

describe('ComunicationSidenavService', () => {
  let service: ComunicationSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicationSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
