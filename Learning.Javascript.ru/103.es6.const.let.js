function f () {
    let x = 5;
    {
        let x = 3;
        console.log(x);
        {
            const x = 2;
            //x = 4;
            console.log(x);
        }
        //let x = 6;
    }
    console.log(x);
}
f();