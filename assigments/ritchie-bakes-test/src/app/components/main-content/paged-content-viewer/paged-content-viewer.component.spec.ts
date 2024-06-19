import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedContentViewerComponent } from './paged-content-viewer.component';

describe('PagedContentViewerComponent', () => {
  let component: PagedContentViewerComponent;
  let fixture: ComponentFixture<PagedContentViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagedContentViewerComponent]
    });
    fixture = TestBed.createComponent(PagedContentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
