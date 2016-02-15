/**
 * Created by rsamokhin on 14.03.15.
 */

console.time('time test');
console.profile('my profile');

console.group();
console.log(1);
console.log(2);
console.groupEnd();
console.groupCollapsed();
console.log(3);
console.log(4);
console.groupEnd();

console.profileEnd('my profile');
console.timeEnd('time test')
