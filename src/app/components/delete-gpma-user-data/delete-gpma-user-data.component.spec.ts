import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGpmaUserDataComponent } from './delete-gpma-user-data.component';

describe('DeleteGpmaUserDataComponent', () => {
  let component: DeleteGpmaUserDataComponent;
  let fixture: ComponentFixture<DeleteGpmaUserDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteGpmaUserDataComponent]
    });
    fixture = TestBed.createComponent(DeleteGpmaUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
