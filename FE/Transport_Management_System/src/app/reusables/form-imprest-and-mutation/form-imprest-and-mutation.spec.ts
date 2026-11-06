import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormImprestAndMutation } from './form-imprest-and-mutation';

describe('FormImprestAndMutation', () => {
  let component: FormImprestAndMutation;
  let fixture: ComponentFixture<FormImprestAndMutation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormImprestAndMutation],
    }).compileComponents();

    fixture = TestBed.createComponent(FormImprestAndMutation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
