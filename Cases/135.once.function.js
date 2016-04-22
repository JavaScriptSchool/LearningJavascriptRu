function once (fn, context) {
    var result;
    return function () {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    }
}

var canOnlyFireOnce  = once(function () {
    console.log('started');
});

canOnlyFireOnce(); //success
canOnlyFireOnce(); //not succecss

//once гарантирует, что заданная функция будет вызвана только один раз, что предотвращает повторную инициализацию.

