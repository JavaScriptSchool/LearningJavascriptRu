var leader = {
    name:"Bob"
};
var  soldier = {
    name:"Peter"
};
leader.soldier = soldier;
soldier.leader = leader;
var team = [soldier,leader];
console.log(JSON.stringify(team));