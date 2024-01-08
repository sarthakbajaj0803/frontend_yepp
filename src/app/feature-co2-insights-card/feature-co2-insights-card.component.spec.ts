import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCo2InsightsCardComponent } from './feature-co2-insights-card.component';

describe('FeatureCo2InsightsCardComponent', () => {
  let component: FeatureCo2InsightsCardComponent;
  let fixture: ComponentFixture<FeatureCo2InsightsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureCo2InsightsCardComponent]
    });
    fixture = TestBed.createComponent(FeatureCo2InsightsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
