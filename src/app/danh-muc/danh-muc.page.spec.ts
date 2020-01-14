import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucPage } from './danh-muc.page';

describe('DanhMucPage', () => {
  let component: DanhMucPage;
  let fixture: ComponentFixture<DanhMucPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhMucPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
