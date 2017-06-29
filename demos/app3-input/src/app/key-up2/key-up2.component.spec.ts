import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUp2Component } from './key-up2.component';

describe('KeyUp2Component', () => {
  let component: KeyUp2Component;
  let fixture: ComponentFixture<KeyUp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyUp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyUp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
