import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCuatroComponent } from './seccion-cuatro.component';

describe('SeccionCuatroComponent', () => {
  let component: SeccionCuatroComponent;
  let fixture: ComponentFixture<SeccionCuatroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionCuatroComponent]
    });
    fixture = TestBed.createComponent(SeccionCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
