import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBookChapterViewerComponent } from './card-book-chapter-viewer.component';

describe('CardBookChapterViewerComponent', () => {
  let component: CardBookChapterViewerComponent;
  let fixture: ComponentFixture<CardBookChapterViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBookChapterViewerComponent]
    });
    fixture = TestBed.createComponent(CardBookChapterViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
