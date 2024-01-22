import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeNavigationComponent } from './theme-navigation.component';

describe('ThemeNavigationComponent', () => {
  let component: ThemeNavigationComponent;
  let fixture: ComponentFixture<ThemeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
