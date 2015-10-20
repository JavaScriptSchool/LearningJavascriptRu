/**
 * Created by rsamokhin on 19/10/15.
 */

console.log('method declaration');

{
    let name = 'bob',
        user = {
            name,
            sayHi() {
                console.log(this.name);
            }
        };
    user.sayHi();
}

console.log('getter');

{
    let name = 'bob',
        surname = 'johnes',
        user = {
            name,
            surname,
            get fullName () {
                return `{name} ${surname};`
            }
        }
}

console.log('method with not simple name');

{
    let methodName = 'getFirstName',
        user = {
            [methodName]() {
                return 'Roma';
            }
        };
    console.log(user.getFirstName());
}