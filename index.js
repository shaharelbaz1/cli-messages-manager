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
   option('retrieveID', {
       alias : 'getMessageByID',
       describe: 'Get message by ID',
       type: 'string',
   }).
   option('retrieve', {
       alias : 'getMessagesList',
       describe: 'Get message list',
   }).
   option('create', {
       alias : 'createMessage',
       describe: 'Create a message, input params- message, sender, recipient',
       type: 'array',
   }).
   option('update', {
       alias : 'updateMessage',
       describe: 'Update a message, input params- message id, message, sender, recipient',
       type: 'array',
   }).
   option('delete', {
       alias : 'deleteMessage',
       describe: 'Delete message',
       type: 'string',
   })
   .usage('Usage: Message Manager API')
   .argv;


if (yargs.argv.retrieveID){
    requests.getMessageByID(yargs.argv.retrieveID);
}
if (yargs.argv.retrieve){
    requests.getMessagesList();
}
if (yargs.argv.create){
    requests.createMessage(yargs.argv.create);
}
if (yargs.argv.update){
    requests.updateMessage(yargs.argv.update);
}
if (yargs.argv.delete){
    requests.deleteMessage(yargs.argv.delete);
}