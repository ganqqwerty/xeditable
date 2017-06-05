import { TestBed, async } from '@angular/core/testing';

import {AppComponent, bracketsNested, bracketsBalanced} from './app.component';
import {FormsModule} from "@angular/forms";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

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
