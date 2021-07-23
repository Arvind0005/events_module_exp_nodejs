var events = require('events');
var fs = require('fs');

var eventsemitter = new events.EventEmitter();



eventsemitter.on('read',readcontent)

eventsemitter.on('display',displayingdata);

eventsemitter.on('finish',finishedd);

eventsemitter.emit('read','JournalDev.txt');
function readcontent(filename)
{
    console.log(`started reading file: ${filename}`);
    fs.readFile(filename,'utf8',function readfile(err,data){
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(`data data sucessfully read`);
            eventsemitter.emit('display',data);
        }
    })
}

function displayingdata(data)
{
    console.log(data);
    eventsemitter.emit('finish');
}

function finishedd()
{
    console.log('successfully finished');
}

// var events = require("events");
// var fs = require('fs');
// var eventsEmitter = new events.EventEmitter();

// eventsEmitter.on('read',readFileContent);
// eventsEmitter.on('display',displayFileContent);
// eventsEmitter.on('finished',finished);
// eventsEmitter.emit('read','JournalDEV.txt');


// function readFileContent(fileName){
//     console.log("Reading " + fileName + " file started:");
//     fs.readFile(fileName, 'utf8', readFile);
// }

// function  displayFileContent(data){
//     console.log("File Data:");
//     console.log(data);
//     eventsEmitter.emit('finished');
// }

// function finished(){
//   console.log("Reading and Printing File content job is done successfully.");
// }

// function readFile(err,data,fileName) {
//     console.log("Reading " + fileName + " file done successfully.");
//     eventsEmitter.emit('display',data);
// }