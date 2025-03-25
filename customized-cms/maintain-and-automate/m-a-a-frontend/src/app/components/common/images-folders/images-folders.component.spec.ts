import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesFoldersComponent } from './images-folders.component';

describe('ImagesFoldersComponent', () => {
  let component: ImagesFoldersComponent;
  let fixture: ComponentFixture<ImagesFoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesFoldersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
