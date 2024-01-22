import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpluggedViewerComponent } from './unplugged-viewer.component';

describe('UnpluggedViewerComponent', () => {
  let component: UnpluggedViewerComponent;
  let fixture: ComponentFixture<UnpluggedViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpluggedViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpluggedViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
