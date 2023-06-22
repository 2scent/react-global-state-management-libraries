import { makeAutoObservable } from 'mobx';

export default class CounterStore {
  value = 0;

  constructor() {
    makeAutoObservable(this, null, { autoBind: true });
  }

  increase() {
    this.value++;
  }

  decrease() {
    this.value--;
  }

  reset() {
    this.value = 0;
  }
}
