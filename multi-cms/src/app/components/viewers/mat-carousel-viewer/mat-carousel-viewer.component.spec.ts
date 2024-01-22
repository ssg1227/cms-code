import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCarouselViewerComponent } from './mat-carosusel-viewer.component';

describe('MatCarouselViewerComponent', () => {
  let component: MatCarouselViewerComponent;
  let fixture: ComponentFixture<MatCarouselViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCarouselViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCarouselViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
