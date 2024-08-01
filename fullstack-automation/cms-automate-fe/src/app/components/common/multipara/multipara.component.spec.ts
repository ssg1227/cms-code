import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiparaComponent } from './multipara.component';

describe('MultiparaComponent', () => {
  let component: MultiparaComponent;
  let fixture: ComponentFixture<MultiparaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiparaComponent]
    });
    fixture = TestBed.createComponent(MultiparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
