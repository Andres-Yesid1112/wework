import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionDosComponent } from './seccion-dos.component';

describe('SeccionDosComponent', () => {
  let component: SeccionDosComponent;
  let fixture: ComponentFixture<SeccionDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionDosComponent]
    });
    fixture = TestBed.createComponent(SeccionDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
