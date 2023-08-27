import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativeSectionComponent } from './informative-section.component';

describe('InformativeSectionComponent', () => {
  let component: InformativeSectionComponent;
  let fixture: ComponentFixture<InformativeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformativeSectionComponent]
    });
    fixture = TestBed.createComponent(InformativeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
