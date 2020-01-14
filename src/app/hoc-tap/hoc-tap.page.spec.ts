import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocTapPage } from './hoc-tap.page';

describe('HocTapPage', () => {
  let component: HocTapPage;
  let fixture: ComponentFixture<HocTapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocTapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocTapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
