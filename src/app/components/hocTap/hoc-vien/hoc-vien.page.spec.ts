import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocVienPage } from './hoc-vien.page';

describe('HocVienPage', () => {
  let component: HocVienPage;
  let fixture: ComponentFixture<HocVienPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocVienPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocVienPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
