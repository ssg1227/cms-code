import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageIntroduction } from './landing-page-introduction.component';

describe('AppMuseumIntroComponent', () => {
  let component: LandingPageIntroduction;
  let fixture: ComponentFixture<LandingPageIntroduction>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageIntroduction ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageIntroduction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
