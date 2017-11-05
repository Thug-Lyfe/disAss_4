

var fs = require('fs');
var arr = new Array();
var userState = new Array();
var corruptLog = new Array();







module.exports = {
    getUserState: function(callback) {
     callback(userState);
      
    },
  
  logReady: function(callback) {
    fs.readFile('./log.txt', function (err, data) {
        if (err) {
            throw err;
        }
        arr = data.toString().split("\n");
        arr.forEach(function(e,index) {
              
            if(e != null && e != ""){
                e = JSON.parse(e); 
            }
    
            if(e.instance_id != null && e.level != null){
                userState[""+e.instance_id] = e.level;
                
            }
            else{
                corruptLog.push(e);
                arr.splice(index,1)
    
            }
    });
    console.log("log size: %s",arr.length)
    console.log("corrupt log files: %s",corruptLog.length)
    console.log("users: %s",userState)
    callback(arr)
    })
      
    }
  };
