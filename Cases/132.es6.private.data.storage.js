class Countdown {
    constructor (counter, action) {
        Object.assign(this, {
            dec () {
                if (counter < 1)
                    return;
                console.log(counter);
                counter--;
                if (counter === 0) {
                    action();
                }
            }
        })
    }
}

let c = new Countdown(2, () => console.log('done'));
c.dec();
c.dec();

console.log('=========================================');

class Countdown2 {
    constructor (counter, action) {
        this._counter = counter;
        this._action = action;
    }
    dec () {
        if (this._counter < 1) {
            return
        }
        console.log(this._counter);
        this._counter--;
        if (this._counter === 0) {
            this._action();
        }
    }
}
let a = new Countdown(3, () => console.log('done2'));
a.dec();
a.dec();
a.dec();

console.log('=========================================');

let _counter = new WeakMap();
let _action = new WeakMap();
class Countdown3 {
    constructor (counter, action) {
        _counter.set(this, counter);
        _action.set(this, action);
    }
    dec () {
        let counter = _counter.get(this);
        if (counter < 1) {
            return;
        }
        console.log(counter);
        counter-- ;
        _counter.set(this, counter);
        if (counter === 0) {
            _action.get(this)();
        }
    }
}

let b = new Countdown3(2, () => console.log('done3'));
b.dec();
b.dec();

console.log('=========================================');

const _counter1 = Symbol('counter');
const _action1 = Symbol('action');
class Countdown4 {
    constructor (counter, action) {
        this[_counter1] = counter;
        this[_action1] = action;
    }
    dec () {
        if (this[_counter1] < 1) {
            return;
        }
        console.log(this[_counter1]);
        this[_counter1]--;
        if (this[_counter1] === 0) {
            this[_action1]();
        }
    }
}

let c  = new Countdown4(4, () => console.log('done4'));
c.dec();
c.dec();
c.dec();
c.dec();