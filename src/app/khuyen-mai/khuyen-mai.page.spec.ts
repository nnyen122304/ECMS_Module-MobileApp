import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhuyenMaiPage } from './khuyen-mai.page';

describe('KhuyenMaiPage', () => {
  let component: KhuyenMaiPage;
  let fixture: ComponentFixture<KhuyenMaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhuyenMaiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhuyenMaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
