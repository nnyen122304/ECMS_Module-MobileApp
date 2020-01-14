import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiKhoanPage } from './tai-khoan.page';

describe('TaiKhoanPage', () => {
  let component: TaiKhoanPage;
  let fixture: ComponentFixture<TaiKhoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaiKhoanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaiKhoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
