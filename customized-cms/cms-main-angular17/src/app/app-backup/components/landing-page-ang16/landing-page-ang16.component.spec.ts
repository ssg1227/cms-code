import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponentAng16 } from './landing-page-ang16.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponentAng16;
  let fixture: ComponentFixture<LandingPageComponentAng16>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageComponentAng16]
    });
    fixture = TestBed.createComponent(LandingPageComponentAng16);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
