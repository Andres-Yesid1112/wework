import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionNueveComponent } from './seccion-nueve.component';

describe('SeccionNueveComponent', () => {
  let component: SeccionNueveComponent;
  let fixture: ComponentFixture<SeccionNueveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionNueveComponent]
    });
    fixture = TestBed.createComponent(SeccionNueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
