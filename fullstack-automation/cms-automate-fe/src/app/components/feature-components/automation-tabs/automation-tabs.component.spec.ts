import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationTabsComponent } from './automation-tabs.component';

describe('AutomationTabsComponent', () => {
  let component: AutomationTabsComponent;
  let fixture: ComponentFixture<AutomationTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomationTabsComponent]
    });
    fixture = TestBed.createComponent(AutomationTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
