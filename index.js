const yargs = require('yargs');
const requests = require('./requests');
const colors = require('colors');

//var URL = "http://localhost:3000"

var argv = require('yargs').
//    option('url', {
//         alias : 'url',
//         describe: 'enter URL',
//         type: 'string',
//         demandOption: true
//    }).
   option('r1', {
       alias : 'getMessageByID',
       describe: 'Get message by ID',
       type: 'string',
   }).
   option('r2', {
       alias : 'getMessageBySender',
       describe: 'Get message by sender',
       type: 'string',
   }).
   option('r3', {
       alias : 'getMessagesList',
       describe: 'Get message list',
   }).
   option('c', {
       alias : 'createMessage',
       describe: 'Create a message, input params- message, sender, recipient',
       type: 'array',
   }).
   option('u', {
       alias : 'updateMessage',
       describe: 'Update a message, input params- message id, message, sender, recipient',
       type: 'array',
   }).
   option('d', {
       alias : 'deleteMessage',
       describe: 'Delete message',
       type: 'string',
   })
   .usage('Usage: Message Manager API')
   .argv;

if (yargs.argv.url){
    URL = yargs.argv.url;
}
if (yargs.argv.r1){
    requests.getMessageByID(yargs.argv.r1);
}
if (yargs.argv.r2){
    requests.getMessageBySender(yargs.argv.r2);
}
if (yargs.argv.r3){
    requests.getMessagesList();
}
if (yargs.argv.c){
    requests.createMessage(yargs.argv.c);
}
if (yargs.argv.u){
    requests.updateMessage(yargs.argv.u);
}
if (yargs.argv.d){
    requests.deleteMessage(yargs.argv.d);
}