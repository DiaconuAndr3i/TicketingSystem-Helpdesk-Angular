import { TestBed } from '@angular/core/testing';

import { UsersInformationsService } from './users-informations.service';

describe('UsersInformationsService', () => {
  let service: UsersInformationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersInformationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
