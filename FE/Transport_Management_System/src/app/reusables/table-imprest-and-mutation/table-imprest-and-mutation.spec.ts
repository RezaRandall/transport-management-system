import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableImprestAndMutation } from './table-imprest-and-mutation';

describe('TableImprestAndMutation', () => {
  let component: TableImprestAndMutation;
  let fixture: ComponentFixture<TableImprestAndMutation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableImprestAndMutation],
    }).compileComponents();

    fixture = TestBed.createComponent(TableImprestAndMutation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
