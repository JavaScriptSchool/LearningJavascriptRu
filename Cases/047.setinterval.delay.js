var time = new Date;
setTimeout(function go(){
    console.log((new Date) - time);
    time = new Date;
    setTimeout(go,100);
},100);