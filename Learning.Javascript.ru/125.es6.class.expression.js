/**
 * Created by rsamokhin on 20/10/15.
 */

console.log('class.expression');

{
    let User = class {
        sayHi() {
            console.log('HI');
        }
    };
    new User().sayHi();
}

console.log('named class expression');

{
    let SiteGuest = class User {
        sayHi () {
            console.log('Say Hi');
        }
    };
    new SiteGuest().sayHi();
    try {
        new User().sayHi();
    } catch (e) {
        console.log(e);
    }
}