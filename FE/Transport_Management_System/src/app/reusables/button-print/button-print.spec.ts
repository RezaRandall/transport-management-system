import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonPrint } from './button-print';

describe('ButtonPrint', () => {
  let component: ButtonPrint;
  let fixture: ComponentFixture<ButtonPrint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPrint],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonPrint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
