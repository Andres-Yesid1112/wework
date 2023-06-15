import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionOchoComponent } from './seccion-ocho.component';

describe('SeccionOchoComponent', () => {
  let component: SeccionOchoComponent;
  let fixture: ComponentFixture<SeccionOchoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionOchoComponent]
    });
    fixture = TestBed.createComponent(SeccionOchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
