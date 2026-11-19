import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormContractEmployee } from './form-contract-employee';

describe('FormContractEmployee', () => {
  let component: FormContractEmployee;
  let fixture: ComponentFixture<FormContractEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormContractEmployee],
    }).compileComponents();

    fixture = TestBed.createComponent(FormContractEmployee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
