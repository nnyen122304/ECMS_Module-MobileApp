import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThithuPage } from './thithu.page';

describe('ThithuPage', () => {
  let component: ThithuPage;
  let fixture: ComponentFixture<ThithuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThithuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThithuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
