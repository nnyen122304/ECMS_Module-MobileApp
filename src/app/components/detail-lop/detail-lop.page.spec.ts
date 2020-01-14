import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLopPage } from './detail-lop.page';

describe('DetailLopPage', () => {
  let component: DetailLopPage;
  let fixture: ComponentFixture<DetailLopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
