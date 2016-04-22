function poll (fn, callback, errback, timeout, interval) {
    var EndTime = Number(new Date() + (timeout || 2000));
    inerval = interval || 100;
    (function p () {
        if (fn ()) {
            callback();
        } else if (Number(new Date()) < endTime) {
            setTimeout(p, interval);
        } else {
            errback(new Error('timed out for ' + fn + ': ' + arguments));
        }
    })()
}

poll(
    function () {
        return document.getElementById('lightbox').offsetWidth > 0;
    },
    function () {
        //new success function;
    },
    function () {
        //new error function
    }
);