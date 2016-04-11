function * myGenerator () {
    yield 'first';
    let input = yield 'second';
    yield input;
}

let iterator = myGenerator();

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next('third'));

console.log(iterator.next());

console.log('=========================================');

function * mySecondGenerator () {
    yield 'first';
    yield 'second';
    yield 'third';
}

for (var v of mySecondGenerator()) {
    console.log(v);
}

console.log('=========================================');

function * myThirdGenerator (start, stop) {
    for (var i = start; i < stop ; i++) {
        yield i;
    }
}

for (var v of myThirdGenerator(1, 5)) {
    console.log(v);
}

console.log('=========================================');

var koa = require('koa'),
    app = koa();
app.use(function * (next) {
    var start =  new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
});
app.use(function * (next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});
app.use(function * () {
    this.body = 'hello World';
});
app.listen(3000);