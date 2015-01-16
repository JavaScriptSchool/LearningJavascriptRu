console.log(new Date(2012,1,20));
console.log(new Date(1000*3600*24*(365)*42+1000*3600*24*(50+(2012-1970)/4)));

var a = new Date;
console.log( ('0'+a.getDate()).slice(-2)  + '.'  + ('0'+(a.getMonth())+1).slice(-2)    +'.' + (a.getFullYear()).toString().slice(-2));