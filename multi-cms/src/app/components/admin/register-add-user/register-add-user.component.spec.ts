import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAddUserComponent } from './register-add-user.component';

describe('RegisterAddUserComponent', () => {
  let component: RegisterAddUserComponent;
  let fixture: ComponentFixture<RegisterAddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAddUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
