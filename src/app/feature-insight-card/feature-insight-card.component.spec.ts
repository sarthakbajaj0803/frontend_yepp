import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureInsightCardComponent } from './feature-insight-card.component';

describe('FeatureInsightCardComponent', () => {
  let component: FeatureInsightCardComponent;
  let fixture: ComponentFixture<FeatureInsightCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureInsightCardComponent]
    });
    fixture = TestBed.createComponent(FeatureInsightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
