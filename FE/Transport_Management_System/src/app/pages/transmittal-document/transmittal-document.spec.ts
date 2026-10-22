import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransmittalDocument } from './transmittal-document';

describe('TransmittalDocument', () => {
  let component: TransmittalDocument;
  let fixture: ComponentFixture<TransmittalDocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransmittalDocument],
    }).compileComponents();

    fixture = TestBed.createComponent(TransmittalDocument);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
