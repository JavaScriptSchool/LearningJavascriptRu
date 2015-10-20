/**
 * Created by rsamokhin on 20/10/15.
 */

console.log('super parent class method');

{
    let animal = {
        walk () {
            console.log("i'm walking");
        }
    },
        rabbit = {
            __proto__: animal,
            walk () {
                super.walk();
            }
        };
    rabbit.walk();
}
