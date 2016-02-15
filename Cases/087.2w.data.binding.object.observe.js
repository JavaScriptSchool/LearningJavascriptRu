var log = console.log;
var user = {};
Object.observe(user,function(changes){
   changes.forEach(function(change){
       user.fullName = user.firstName + ' ' + user.lastName;
       console.log(changes);
       console.log(user.fullName);
   });
});
user.firstName = 'Roman';
user.lastName = 'Samokhin';