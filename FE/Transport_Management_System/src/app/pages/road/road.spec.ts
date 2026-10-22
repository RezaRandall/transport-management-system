import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Road } from './road';

describe('Road', () => {
  let component: Road;
  let fixture: ComponentFixture<Road>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Road],
    }).compileComponents();

    fixture = TestBed.createComponent(Road);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
