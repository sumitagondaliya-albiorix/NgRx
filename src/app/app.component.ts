
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-counter></app-counter>'
})
export class AppComponent {
  title(_title: any) {
    throw new Error('Method not implemented.');
  }
}