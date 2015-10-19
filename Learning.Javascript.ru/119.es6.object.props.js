/**
 * Created by rsamokhin on 19/10/15.
 */

console.log('short properties');

{
    let name = 'bob';
    let isAdmin = true;
    let user = {
        name,
        isAdmin
    };
    console.log(JSON.stringify(user));
}

console.log('counted props');

{
    let a = 'my ',
        b = 'green ',
        c = 'crocodile',
        propName = 'age',
        user = {
            [propName]: '25',
            [(a + b + c).toLowerCase()]: 'Roma'
        };
    console.log(JSON.stringify(user));
}

