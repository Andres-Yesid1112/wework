import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTresComponent } from './seccion-tres.component';

describe('SeccionTresComponent', () => {
  let component: SeccionTresComponent;
  let fixture: ComponentFixture<SeccionTresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionTresComponent]
    });
    fixture = TestBed.createComponent(SeccionTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
