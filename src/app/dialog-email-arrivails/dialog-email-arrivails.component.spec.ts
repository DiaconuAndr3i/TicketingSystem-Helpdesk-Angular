import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmailArrivailsComponent } from './dialog-email-arrivails.component';

describe('DialogEmailArrivailsComponent', () => {
  let component: DialogEmailArrivailsComponent;
  let fixture: ComponentFixture<DialogEmailArrivailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEmailArrivailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEmailArrivailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
