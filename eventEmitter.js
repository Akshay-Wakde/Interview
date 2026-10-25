const EventEmitter = require("events");


const eventEmmiter = new EventEmitter();

eventEmmiter.on('userId', (logs)=>{
    console.log(`On UserId Pushed ${logs}`);
});


eventEmmiter.emit("userId","Users");