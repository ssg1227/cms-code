import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialOriginComponent } from './material-origin.component';

describe('MaterialOriginComponent', () => {
  let component: MaterialOriginComponent;
  let fixture: ComponentFixture<MaterialOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialOriginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
