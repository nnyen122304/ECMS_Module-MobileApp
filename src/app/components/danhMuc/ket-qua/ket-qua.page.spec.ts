import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaPage } from './ket-qua.page';

describe('KetQuaPage', () => {
  let component: KetQuaPage;
  let fixture: ComponentFixture<KetQuaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
