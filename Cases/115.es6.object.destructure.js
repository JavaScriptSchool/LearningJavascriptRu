/**
 * Created by rsamokhin on 19/10/15.
 */
'use strict';

console.log('full sintax');
{
    let options = {
        title: 'Menu',
        width: 100,
        height: 200
    };
    let {title, width, height} = options;
    console.log('title = ' + title);
    console.log('width = ' + width);
    console.log('height = ' + height);
}
console.log('shortened');
{
    let options = {
        title: 'Menu',
        width: 100,
        height: 200
    };
    let {title:t, width:w, height:h} = options;
    console.log('t = ' + t);
    console.log('w = ' + w);
    console.log('h = ' + h);
}
console.log('defaults & shortening');
{
    let options = {
        title: 'Menu',
    };
    let {width:w = 100, height = 200, title} = options;
    console.log('title = ' + title);
    console.log('w = ' + w);
    console.log('height = ' + height);
}

console.log('destructuring without let');

let a, b;
({a, b} = {a: 5, b: 6});
console.log('a=' + a);
console.log('b=' + b);

console.log('included destructuring');
{
    let options = {
        size: {
            width: 100,
            height: 200
        },
        items: [
            'Donut',
            'Cake'
        ]
    };
    let {
            title = 'menu',
            size: {
                    width,
                    height
            },
            items: [
                item1,
                item2
            ]
        } = options;
    console.log('title = ' + title);
    console.log('width = ' + width);
    console.log('height = ' + height);
    console.log('item1 = ' + item1);
    console.log('item2 = ' + item2);
}