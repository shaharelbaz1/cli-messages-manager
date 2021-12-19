const axios = require('axios');

  function getMessageByID(id) {
    axios.get('http://localhost:3000/api/messages/'+id)
    .then(function (response) {
      console.log("\ngetMessageByID: ".cyan)
      console.log(response.data ? response.data : "no data");
    })
    .catch(function (error) {
      console.log("\ngetMessageByID: ".red)
      console.error(error && error.response && error.response.data ? error.response.data : 'undefined error');
    })
  }

  function getMessagesList() {
    axios.get('http://localhost:3000/api/messages')
    .then(function (response) {
      console.log("\ngetMessagesList: ".cyan)
      console.log(response.data ? response.data : "no data");
    })
    .catch(function (error) {
      console.log("\ngetMessagesList: ".red)
      console.error(error && error.response && error.response.data ? error.response.data : 'undefined error');
    })
  }

  function createMessage(messageArray) {
    axios.post('http://localhost:3000/api/messages/', {
        message: messageArray[0] ? messageArray[0] : null,
        sender: messageArray[1] ? messageArray[1] : null,
        recipient: messageArray[2] ? messageArray[2] : null
      })
    .then(function (response) {
      console.log("\ncreateMessage: ".cyan)
      console.log(response.data);
    })
    .catch(function (error) {
      console.log("\ncreateMessage: ".red)
      console.error(error && error.response && error.response.data ? error.response.data : 'undefined error');
    })
  }

  function updateMessage(messageArray) {
    var id = messageArray[0] ? messageArray[0] : '';
    axios.put('http://localhost:3000/api/messages/' + id,{
        message: messageArray[1] ? messageArray[1] : null,
        sender: messageArray[2] ? messageArray[2] : null,
        recipient: messageArray[3] ? messageArray[3] : null
      })
    .then(function (response) {
      console.log("\nupdateMessage: ".cyan)
      console.log(response.data);
    })
    .catch(function (error) {
      console.log("\nupdateMessage: ".red)
      console.error(error && error.response && error.response.data ? error.response.data : 'undefined error');
    })
  }

  function deleteMessage(id) {
    axios.delete('http://localhost:3000/api/messages/'+id)
    .then(function (response) {
      console.log("\ndeleteMessage: ".cyan)
      console.log(response.data);
    })
    .catch(function (error) {
      console.log("\ndeleteMessage: ".red)
      console.error(error && error.response && error.response.data ? error.response.data : 'undefined error');
    })
  }

  module.exports = {
    getMessageByID,
    getMessagesList,
    createMessage,
    updateMessage,
    deleteMessage
};