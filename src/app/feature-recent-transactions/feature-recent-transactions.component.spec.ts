import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRecentTransactionsComponent } from './feature-recent-transactions.component';

describe('FeatureRecentTransactionsComponent', () => {
  let component: FeatureRecentTransactionsComponent;
  let fixture: ComponentFixture<FeatureRecentTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureRecentTransactionsComponent]
    });
    fixture = TestBed.createComponent(FeatureRecentTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
