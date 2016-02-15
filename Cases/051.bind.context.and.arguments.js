function User(name){
    this.toString = function(){
        return name;
    };
    this.send = function(to,message){
        console.log(this+':'+to+' '+message);
    }
}
var admin = new User('Admin');
var user = new User('User');
var sendMessage = admin.send.bind(admin,user);
sendMessage('Hello');
