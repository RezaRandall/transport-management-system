import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormContractDriver } from './form-contract-driver';

describe('FormContractDriver', () => {
  let component: FormContractDriver;
  let fixture: ComponentFixture<FormContractDriver>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormContractDriver],
    }).compileComponents();

    fixture = TestBed.createComponent(FormContractDriver);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
