import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDebitCardComponent } from './feature-debit-card.component';

describe('FeatureDebitCardComponent', () => {
  let component: FeatureDebitCardComponent;
  let fixture: ComponentFixture<FeatureDebitCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureDebitCardComponent]
    });
    fixture = TestBed.createComponent(FeatureDebitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
