import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hi there, I have some really {nice} things here, {yo}!';
  countExpressions(str) {
    let m;
    const regex = /(\{.*?\})/gm;

    while ((m = regex.exec(str)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      // The result can be accessed through the `m`-variable.
      console.log(m[1]);
    }
  };

  /**
   * returns true if brackets are balanced like here {{{}}}{}
   * returns false if we have wrong number of opened and closed brackets like here: {{}
   * returns false if the brackets are not matched like here: }{} or here {{}}} or here {{}{
   * TODO allow escaping of the brackets
   * @param str input string
   * @return {boolean}
   */
  bracketsBalanced(str) {
    const brackets: string[] = str.split('').filter(symbol => symbol === '{' || symbol === '}');
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
}
