import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HblcalculatorComponent } from './hblcalculator.component';

describe('HblcalculatorComponent', () => {
  let component: HblcalculatorComponent;
  let fixture: ComponentFixture<HblcalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HblcalculatorComponent]
    });
    fixture = TestBed.createComponent(HblcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
