import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginJWTPage } from './login-jwt.page';

describe('LoginJWTPage', () => {
  let component: LoginJWTPage;
  let fixture: ComponentFixture<LoginJWTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginJWTPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginJWTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
