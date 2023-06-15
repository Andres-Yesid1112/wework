import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionSieteComponent } from './seccion-siete.component';

describe('SeccionSieteComponent', () => {
  let component: SeccionSieteComponent;
  let fixture: ComponentFixture<SeccionSieteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionSieteComponent]
    });
    fixture = TestBed.createComponent(SeccionSieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
