import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hi there, I have some really {nice} things here, {yo}!';
  getBracketedPieces = getBracketedPieces;
  bracketsBalanced = bracketsBalanced;
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
