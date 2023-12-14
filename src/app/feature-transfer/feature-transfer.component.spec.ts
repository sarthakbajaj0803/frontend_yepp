import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTransferComponent } from './feature-transfer.component';

describe('FeatureTransferComponent', () => {
  let component: FeatureTransferComponent;
  let fixture: ComponentFixture<FeatureTransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureTransferComponent]
    });
    fixture = TestBed.createComponent(FeatureTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
