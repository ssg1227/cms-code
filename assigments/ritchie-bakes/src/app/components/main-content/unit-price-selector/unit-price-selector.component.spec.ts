import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitPriceSelectorComponent } from './unit-price-selector.component';

describe('UnitPriceSelectorComponent', () => {
  let component: UnitPriceSelectorComponent;
  let fixture: ComponentFixture<UnitPriceSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitPriceSelectorComponent]
    });
    fixture = TestBed.createComponent(UnitPriceSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
