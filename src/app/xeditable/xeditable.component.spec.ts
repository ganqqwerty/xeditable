import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XeditableComponent,  bracketsNested, bracketsBalanced } from './xeditable.component';
import {FormsModule} from "@angular/forms";

describe('XeditableComponent', () => {
  let component: XeditableComponent;
  let fixture: ComponentFixture<XeditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XeditableComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XeditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('bracketsNested function', () => {
  it ('should return false for {}', () => {
    expect(bracketsNested("{}")).toBe(false);
  });
  it ('should return false for {}{}', () => {
    expect(bracketsNested("{}{}")).toBe(false);
  });
  it ('should return true for {{}}', () => {
    expect(bracketsNested("{{}}")).toBe(true);
  });
  it ('should return true for {{{}}}', () => {
    expect(bracketsNested("{{{}}}")).toBe(true);
  });
  it ('should return true for {}{{}}', () => {
    expect(bracketsNested("{}{{}}")).toBe(true);
  });
  it ('should return true for {{}}{}', () => {
    expect(bracketsNested("{{}}{}")).toBe(true);
  });
});

describe('bracketsBalanced function', () => {
  it ('should return true for empty string', () => {
    expect(bracketsBalanced("")).toBe(true);
  });
  it ('should return true for {}', () => {
    expect(bracketsBalanced("{}")).toBe(true);
  });
  it ('should return true for {{}}', () => {
    expect(bracketsBalanced("{{}}")).toBe(true);
  });
  it ('should return true for {{}{}}', () => {
    expect(bracketsBalanced("{{}{}}")).toBe(true);
  });
  it ('should return false for {', () => {
    expect(bracketsBalanced("{")).toBe(false);
  });
  it ('should return false for }', () => {
    expect(bracketsBalanced("}")).toBe(false);
  });
  it ('should return false for }{}', () => {
    expect(bracketsBalanced("}")).toBe(false);
  });
  it ('should return false for {{}', () => {
    expect(bracketsBalanced("}")).toBe(false);
  });
  it ('should return false for {{}{}', () => {
    expect(bracketsBalanced("}")).toBe(false);
  });
  it ('should return false for }{{', () => {
    expect(bracketsBalanced("}")).toBe(false);
  });
});
