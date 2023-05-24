import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ansattpics2Component } from './ansattpics2.component';

describe('Ansattpics2Component', () => {
  let component: Ansattpics2Component;
  let fixture: ComponentFixture<Ansattpics2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ansattpics2Component]
    });
    fixture = TestBed.createComponent(Ansattpics2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
