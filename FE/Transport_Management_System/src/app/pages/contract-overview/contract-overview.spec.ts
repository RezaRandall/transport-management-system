import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContractOverview } from './contract-overview';

describe('ContractOverview', () => {
  let component: ContractOverview;
  let fixture: ComponentFixture<ContractOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
