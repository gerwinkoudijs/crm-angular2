import { Component } from '@angular/core';

import { AppState } from '../../app.service';
import { XLarge } from './x-large';

@Component({
  selector: 'home',  // <home></home>
  providers: [],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class Home {
  localState = { value: '' };

  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
  }

  submitState(value: string) {
    console.log('submitState', value + ' check!!!');
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
