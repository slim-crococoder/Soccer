import { createAttribute } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
// @component = decorateur
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calcul(a: number, b: number) {
    return a + b;
  }

  minElt(T) {
    let min = T[0];
    for (let i = 0; i < T.length; i++) {
      if (T[i] < min) {
        min = T[i]
      }

    }
    return min;

  }
  nbrchar(T) {
    // na3mlo variable esmo T1 fih Tableau feregh
    let T1 = Array();
    for (let i = 0; i < T.length; i++) {
      // T[i] : te5o lkelma fi tableau +T[i].length : w te7seb lkelma 9adeh feha min 7arf
      let ch = T[i] + ':' + T[i].length;
      //T[i].length nsobouh fi t1 
      T1.push(ch)

    }
    return T1;

  }

}
