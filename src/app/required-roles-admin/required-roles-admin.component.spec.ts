import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredRolesAdminComponent } from './required-roles-admin.component';

describe('RequiredRolesAdminComponent', () => {
  let component: RequiredRolesAdminComponent;
  let fixture: ComponentFixture<RequiredRolesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredRolesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredRolesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
