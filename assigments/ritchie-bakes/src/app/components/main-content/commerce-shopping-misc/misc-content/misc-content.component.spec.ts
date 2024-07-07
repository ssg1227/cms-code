import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscContentComponent } from './misc-content.component';

describe('MiscContentComponent', () => {
  let component: MiscContentComponent;
  let fixture: ComponentFixture<MiscContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscContentComponent]
    });
    fixture = TestBed.createComponent(MiscContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
