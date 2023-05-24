import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ansattpics3Component } from './ansattpics3.component';

describe('Ansattpics3Component', () => {
  let component: Ansattpics3Component;
  let fixture: ComponentFixture<Ansattpics3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ansattpics3Component]
    });
    fixture = TestBed.createComponent(Ansattpics3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
