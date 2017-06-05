import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XeditableInputTextComponent } from './xeditable-input-text.component';

describe('XeditableInputTextComponent', () => {
  let component: XeditableInputTextComponent;
  let fixture: ComponentFixture<XeditableInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XeditableInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XeditableInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
