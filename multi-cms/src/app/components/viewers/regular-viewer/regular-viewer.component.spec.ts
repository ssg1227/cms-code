import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularViewerComponent } from './regular-viewer.component';

describe('RegularViewerComponent', () => {
  let component: RegularViewerComponent;
  let fixture: ComponentFixture<RegularViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
