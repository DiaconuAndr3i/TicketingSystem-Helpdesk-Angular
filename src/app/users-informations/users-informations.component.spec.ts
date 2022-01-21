import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInformationsComponent } from './users-informations.component';

describe('UsersInformationsComponent', () => {
  let component: UsersInformationsComponent;
  let fixture: ComponentFixture<UsersInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
