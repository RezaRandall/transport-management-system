import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormContractCustomer } from './form-contract-customer';

describe('FormContractCustomer', () => {
  let component: FormContractCustomer;
  let fixture: ComponentFixture<FormContractCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormContractCustomer],
    }).compileComponents();

    fixture = TestBed.createComponent(FormContractCustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
