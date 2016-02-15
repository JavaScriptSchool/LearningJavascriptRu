function Article(){
    Article.count++;
    this.created=new Date();
    Article.lastDate=(Article.lastDate>this.created)?Article.lastDate:this.created;
}
Article.showStates = function(){
    return 'Всего: '+Article.count+'. Последний '+ Article.lastDate.getMilliseconds();
}
Article.count = 0;
new Article();
new Article();
console.log(Article.showStates());
new Article();
console.log(Article.showStates());