console.log('start');
outer: for (var i = 0 ; i < 10 ; i++) {
    var str = '';
    for (var j = 0 ; j < 10 ; j++) {
        str += j + ' ';
        if (j === i){
            console.log(str);
            continue outer;
        }
    }
}
console.log('finish');

console.log('begin');
outer: {
    inner: {
        console.log('inner');
        break outer;
    }
    console.log('outer');
}
console.log('end');


