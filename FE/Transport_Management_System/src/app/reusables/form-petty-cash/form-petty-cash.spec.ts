import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormPettyCash } from './form-petty-cash';

describe('FormPettyCash', () => {
  let component: FormPettyCash;
  let fixture: ComponentFixture<FormPettyCash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPettyCash],
    }).compileComponents();

    fixture = TestBed.createComponent(FormPettyCash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
