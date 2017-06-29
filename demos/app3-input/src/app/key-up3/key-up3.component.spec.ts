import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUp3Component } from './key-up3.component';

describe('KeyUp3Component', () => {
  let component: KeyUp3Component;
  let fixture: ComponentFixture<KeyUp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyUp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyUp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
