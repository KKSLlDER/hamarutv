import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirksomhetComponent } from './virksomhet.component';

describe('VirksomhetComponent', () => {
  let component: VirksomhetComponent;
  let fixture: ComponentFixture<VirksomhetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirksomhetComponent]
    });
    fixture = TestBed.createComponent(VirksomhetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
