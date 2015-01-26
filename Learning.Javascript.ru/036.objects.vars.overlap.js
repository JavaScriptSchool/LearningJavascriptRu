function User(name){
    this.sayHi = function(name){
        console.log(name);
        return this;
    }
}
var user = new User('Roman');
user.sayHi('Peter');

//impossible to reach the private overlapped variable
