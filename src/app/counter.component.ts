import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { getCount } from './counter.selectors';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h1>Counter: {{ counter$ }}</h1>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button (click)="reset()">Reset</button>
    </div>
  `,
})
export class CounterComponent {
  counter$ = this.store;

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
