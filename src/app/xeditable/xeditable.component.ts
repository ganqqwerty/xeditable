import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xeditable',
  templateUrl: './xeditable.component.html',
  styleUrls: ['./xeditable.component.css']
})
export class XeditableComponent implements OnInit {

  title = 'Hi there, I have some really {nice} things here, {yo}!';
  getBracketedPieces = getBracketedPieces;
  bracketsBalanced = bracketsBalanced;

  constructor() { }

  ngOnInit() {
  }

}

/**
 * for the given string containing curly brackets {} returns the array of texts inside those brackets
 * pure function
 * @param str string with balanced unnested brackets
 */
export function getBracketedPieces(str: string) : string[] {
  let m;
  const regex = /\{(.*?)\}/gm;
  let ret: string[] = [];

  while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    // we have only one group in regex, so we only care about the element number 1
    ret.push(m[1]);
  }
  console.log(ret);
  return ret;
}

/**
 * returns true if brackets are balanced like here {{{}}}{}
 * returns false if we have wrong number of opened and closed brackets like here: {{}
 * returns false if the brackets are not matched like here: }{} or here {{}}} or here {{}{
 * TODO allow escaping of the brackets
 * TODO what about string without brackets?
 * pure function
 * @param str input string
 * @return {boolean}
 */
export function bracketsBalanced(str: string): boolean {
  const brackets: string[] = str.split('').filter(symbol => symbol === '{' || symbol === '}');
  if (!brackets.length) {
    return true;
  }
  let counter = 0;
  let balanced = true;

  brackets.forEach(s => {
    if (s === '{' ) {
      counter++
    }
    else {
      counter --;
    }
    if (counter < 0) {
      balanced = false;
    }
  });
  if (counter !== 0 ) {
    balanced = false;
  }
  return balanced;
}

/**
 * returns true if there's at least one nesting in the brackets, like here {{}}{}
 * @param str a string with brackets and possibly other characters. The brackets are balanced.
 */
export function bracketsNested(str: string): boolean {
  return str
      .split('')
      .filter(symbol => symbol === '{' || symbol === '}')
      .join('')
      .search(/{{/) !== -1;
}


/**
 * returns false if the form of xeditable is inccorrect, that is, the type is not in `validTypes` array or the format of default values doesn't correspond to a regular expression
 * @param text
 * @param validTypes
 * @return {boolean}
 */
export function typeOfXeditable(text: string, validTypes: string[]) : boolean {
  //check the presence of one of valid keywords for types registered in the system

  // everything is okey, so return the component
  return true;
}
