import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageViewerComponent } from './card-image-viewer.component';

describe('CardImageViewerComponent', () => {
  let component: CardImageViewerComponent;
  let fixture: ComponentFixture<CardImageViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardImageViewerComponent]
    });
    fixture = TestBed.createComponent(CardImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
