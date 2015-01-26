var ladder = {
    step:0,
    up:function(){
        this.step++;
        return this;
    },
    down:function(){
        this.step--;
        return this;
    },
    showSteps:function(){
        console.log(this.step);
        return this;
    }
}

ladder.up().up().down().up().up().showSteps();