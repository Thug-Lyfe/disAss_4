var handler = require("./fileHandler.js");



handler.logReady(function(arr){
    handler.getUserState(function (states) {
        states.forEach(function (element,index) {
            console.log("User is: %s on the state: %s", element,index)
        });
    })
})


