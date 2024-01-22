import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularImageViewerComponent } from './regular-image-viewer.component';

describe('RegularImageViewerComponent', () => {
  let component: RegularImageViewerComponent;
  let fixture: ComponentFixture<RegularImageViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularImageViewerComponent]
    });
    fixture = TestBed.createComponent(RegularImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
