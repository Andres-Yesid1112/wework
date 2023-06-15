import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeworkComponent } from './wework.component';

describe('WeworkComponent', () => {
  let component: WeworkComponent;
  let fixture: ComponentFixture<WeworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeworkComponent]
    });
    fixture = TestBed.createComponent(WeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
