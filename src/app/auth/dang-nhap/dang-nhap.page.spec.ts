import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangNhapPage } from './dang-nhap.page';

describe('DangNhapPage', () => {
  let component: DangNhapPage;
  let fixture: ComponentFixture<DangNhapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangNhapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangNhapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
