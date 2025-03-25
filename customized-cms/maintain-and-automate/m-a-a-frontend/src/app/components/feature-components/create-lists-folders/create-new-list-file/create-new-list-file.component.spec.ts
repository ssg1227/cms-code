import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewListFileComponent } from './create-new-list-file.component';

describe('CreateNewListFileComponent', () => {
  let component: CreateNewListFileComponent;
  let fixture: ComponentFixture<CreateNewListFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewListFileComponent]
    });
    fixture = TestBed.createComponent(CreateNewListFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
