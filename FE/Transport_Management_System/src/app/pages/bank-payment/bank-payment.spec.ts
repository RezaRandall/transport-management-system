import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankPayment } from './bank-payment';

describe('BankPayment', () => {
  let component: BankPayment;
  let fixture: ComponentFixture<BankPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankPayment],
    }).compileComponents();

    fixture = TestBed.createComponent(BankPayment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
