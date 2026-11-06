import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableImprestPettyCash } from './table-imprest-petty-cash';

describe('TableImprestPettyCash', () => {
  let component: TableImprestPettyCash;
  let fixture: ComponentFixture<TableImprestPettyCash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableImprestPettyCash],
    }).compileComponents();

    fixture = TestBed.createComponent(TableImprestPettyCash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
