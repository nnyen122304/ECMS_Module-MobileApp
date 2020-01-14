import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanXetPage } from './nhan-xet.page';

describe('NhanXetPage', () => {
  let component: NhanXetPage;
  let fixture: ComponentFixture<NhanXetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhanXetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanXetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
