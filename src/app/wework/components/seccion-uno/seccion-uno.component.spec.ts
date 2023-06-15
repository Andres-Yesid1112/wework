import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionUnoComponent } from './seccion-uno.component';

describe('SeccionUnoComponent', () => {
  let component: SeccionUnoComponent;
  let fixture: ComponentFixture<SeccionUnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionUnoComponent]
    });
    fixture = TestBed.createComponent(SeccionUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});