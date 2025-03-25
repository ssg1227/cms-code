import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMenuTreeServiceEntriesComponent } from './update-menu-tree-service-entries.component';

describe('UpdateMenuTreeServiceEntriesComponent', () => {
  let component: UpdateMenuTreeServiceEntriesComponent;
  let fixture: ComponentFixture<UpdateMenuTreeServiceEntriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMenuTreeServiceEntriesComponent]
    });
    fixture = TestBed.createComponent(UpdateMenuTreeServiceEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
