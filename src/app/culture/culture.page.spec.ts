import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturePage } from './culture.page';

describe('CulturePage', () => {
  let component: CulturePage;
  let fixture: ComponentFixture<CulturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
