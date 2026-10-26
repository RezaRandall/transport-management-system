import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormTransmittialDocument } from './form-transmittial-document';

describe('FormTransmittialDocument', () => {
  let component: FormTransmittialDocument;
  let fixture: ComponentFixture<FormTransmittialDocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTransmittialDocument],
    }).compileComponents();

    fixture = TestBed.createComponent(FormTransmittialDocument);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
