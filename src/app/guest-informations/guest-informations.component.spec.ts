import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestInformationsComponent } from './guest-informations.component';

describe('GuestInformationsComponent', () => {
  let component: GuestInformationsComponent;
  let fixture: ComponentFixture<GuestInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
