/**
 * Created by rsamokhin on 20/10/15.
 */

console.log('class example');

{
    class User {
        constructor (name) {
            this.name = name;
        }
        sayHi () {
            console.log(this.name);
        }
    }
    let user = new User('Roman');
    user.sayHi();
}