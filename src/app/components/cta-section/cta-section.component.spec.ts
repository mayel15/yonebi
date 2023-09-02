import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaSectionComponent } from './cta-section.component';

describe('CtaSectionComponent', () => {
  let component: CtaSectionComponent;
  let fixture: ComponentFixture<CtaSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtaSectionComponent]
    });
    fixture = TestBed.createComponent(CtaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
