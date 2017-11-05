var fs = require('fs');

var level = ["Information","Warning","Error"];
var id = [0,1,2,3,4];
var instance = [0,1,2,3,4];
var action = [0,1,2,3];
/*
level Information, Warning, Error
system System id
instance Instance id
action Action id
timestamp Time of the event
*/
var txt = "";
for (var i = 0; i < 1000; i++) {
    var date = new Date();
    date.setHours(date.getHours()+i);
    var temp= {
      level:level[Math.floor(Math.random()*3)],
      system_id:id[Math.floor(Math.random()*5)],
      instance_id:instance[Math.floor(Math.random()*5)],
      action_id:action[Math.floor(Math.random()*4)],
      timestamp: date,

  }
  txt += JSON.stringify(temp) + "\n"
    
}

fs.writeFile("./log.txt", txt, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
