import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightPageComponent } from './insight-page.component';

describe('InsightPageComponent', () => {
  let component: InsightPageComponent;
  let fixture: ComponentFixture<InsightPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsightPageComponent]
    });
    fixture = TestBed.createComponent(InsightPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
