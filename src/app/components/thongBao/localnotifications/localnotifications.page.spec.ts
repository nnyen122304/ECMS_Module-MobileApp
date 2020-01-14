import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalnotificationsPage } from './localnotifications.page';

describe('LocalnotificationsPage', () => {
  let component: LocalnotificationsPage;
  let fixture: ComponentFixture<LocalnotificationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalnotificationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalnotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
