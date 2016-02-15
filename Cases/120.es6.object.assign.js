/**
 * Created by rsamokhin on 19/10/15.
 */

console.log('assign copies other objects inside the first one');

{
    let user = {name: 'Roma'},
        visitor = {isAdmin: false, visits: true},
        admin = {isAdmin: true};
    Object.assign(user, visitor, admin);
    console.log(user);
}

console.log('1-st level object cloning');

{
    let user = {
        name: 'bob',
        isAdmin: false
    },
        clone = Object.assign({}, user);
    console.log(JSON.stringify(clone))
}
