import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCincoComponent } from './seccion-cinco.component';

describe('SeccionCincoComponent', () => {
  let component: SeccionCincoComponent;
  let fixture: ComponentFixture<SeccionCincoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionCincoComponent]
    });
    fixture = TestBed.createComponent(SeccionCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
