import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkiPage } from './dangki.page';

describe('DangkiPage', () => {
  let component: DangkiPage;
  let fixture: ComponentFixture<DangkiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangkiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
