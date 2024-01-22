import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbingContainerComponent } from './tabbing-container.component';

describe('TabbingContainerComponent', () => {
  let component: TabbingContainerComponent;
  let fixture: ComponentFixture<TabbingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabbingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
