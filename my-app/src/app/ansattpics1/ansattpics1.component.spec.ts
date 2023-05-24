import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ansattpics1Component } from './ansattpics1.component';

describe('Ansattpics1Component', () => {
  let component: Ansattpics1Component;
  let fixture: ComponentFixture<Ansattpics1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ansattpics1Component]
    });
    fixture = TestBed.createComponent(Ansattpics1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
