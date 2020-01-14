import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LopHocVienPage } from './lop-hoc-vien.page';

describe('LopHocVienPage', () => {
  let component: LopHocVienPage;
  let fixture: ComponentFixture<LopHocVienPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LopHocVienPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LopHocVienPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
