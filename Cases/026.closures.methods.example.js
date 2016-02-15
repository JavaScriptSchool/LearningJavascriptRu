var makeDonkey = function(){
    var name='Default Name';
    var iDonkey = function(){
        return name;
    }
    iDonkey.setName = function(newName){
        if(newName!=undefined) {
            name = newName;
            return true;
        }
    };
    iDonkey.sayHi = function(){
        return name;
    };
    iDonkey.yell = function(){
        return 'YA yA aya';
    };
    return iDonkey;
}
donkey = makeDonkey();
console.log(donkey());
console.log(donkey.setName('Ia'));
console.log(donkey());
console.log(donkey.sayHi());
console.log(donkey.yell());