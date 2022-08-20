import {makeAutoObservable} from "mobx";

class CounterStore {
    count = 0;
    timer = 60;

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.count = this.count + 1;
        console.log('inc', this.count);
    }

    decrement() {
        this.count = this.count - 1;
        console.log('dec', this.count);
    }

    get total() {
        return `Count + timer = ` + (this.count + this.timer)
    }
}

export default new CounterStore();