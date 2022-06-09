import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedTicketsComponent } from './received-tickets.component';

describe('ReceivedTicketsComponent', () => {
  let component: ReceivedTicketsComponent;
  let fixture: ComponentFixture<ReceivedTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
