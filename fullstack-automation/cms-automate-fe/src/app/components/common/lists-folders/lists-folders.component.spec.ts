import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsFoldersComponent } from './lists-folders.component';

describe('ListsFoldersComponent', () => {
  let component: ListsFoldersComponent;
  let fixture: ComponentFixture<ListsFoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsFoldersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
