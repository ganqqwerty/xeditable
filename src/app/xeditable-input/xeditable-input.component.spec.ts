import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XeditableInputComponent } from './xeditable-input.component';

describe('XeditableInputComponent', () => {
  let component: XeditableInputComponent;
  let fixture: ComponentFixture<XeditableInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XeditableInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XeditableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
