import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumberPage } from './random-number.page';

describe('RandomNumberPage', () => {
  let component: RandomNumberPage;
  let fixture: ComponentFixture<RandomNumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomNumberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
