import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUp4Component } from './key-up4.component';

describe('KeyUp4Component', () => {
  let component: KeyUp4Component;
  let fixture: ComponentFixture<KeyUp4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyUp4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyUp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
