import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularBookChapterViewerComponent } from './regular-book-chapter-viewer.component';

describe('RegularBookChapterViewerComponent', () => {
  let component: RegularBookChapterViewerComponent;
  let fixture: ComponentFixture<RegularBookChapterViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularBookChapterViewerComponent]
    });
    fixture = TestBed.createComponent(RegularBookChapterViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
