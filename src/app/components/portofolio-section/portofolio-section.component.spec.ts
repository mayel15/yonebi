import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioSectionComponent } from './portofolio-section.component';

describe('PortofolioSectionComponent', () => {
  let component: PortofolioSectionComponent;
  let fixture: ComponentFixture<PortofolioSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortofolioSectionComponent]
    });
    fixture = TestBed.createComponent(PortofolioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
