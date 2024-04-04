import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterCodeComponent } from './form-register-code.component';

describe('FormRegisterCodeComponent', () => {
  let component: FormRegisterCodeComponent;
  let fixture: ComponentFixture<FormRegisterCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisterCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisterCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
