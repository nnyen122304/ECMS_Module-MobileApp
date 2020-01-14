import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoiKhoaBieuPage } from './thoi-khoa-bieu.page';

describe('ThoiKhoaBieuPage', () => {
  let component: ThoiKhoaBieuPage;
  let fixture: ComponentFixture<ThoiKhoaBieuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoiKhoaBieuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoiKhoaBieuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
