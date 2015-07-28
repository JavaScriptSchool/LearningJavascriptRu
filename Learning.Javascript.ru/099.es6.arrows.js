'use strict'
var evens = [2, 4, 6, 8, 10, 12, 14];
console.log('evens: ' + evens);
var odds = evens.map(v => v+1);
console.log('odds: ' + odds)
var nums = evens.map((v, i) => v+i);
console.log('nums: ' + nums);
nums.forEach(v => {
    if (v % 5 === 0)
        console.log(v);
});
var bob = {
    _name: 'bob',
    _friends: ['ann', 'bet'],
    printFriends() {
        this._friends.forEach(f => console.log(this._name + ' knows ' + f));
    }
}
bob.printFriends();