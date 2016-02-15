function sumLoop(a){
	var s = 0;
	if (a>0)
		while(a){
			s+=a;
			a--;	
		}
	else
		console.log("wrong input")
	console.log(s);
}
a = new Date().getTime();
sumLoop(10000);
b = new Date().getTime();
console.log(b-a);
