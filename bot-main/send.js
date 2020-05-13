function reply(e) {
  var message = e.message.text
  var reply = getReplAiMessage(message)
  return reply;
}

function send(e,reply){ 
  var message = {
    "replyToken" : e.replyToken,
    "messages" : [{
        "type": "text",
        "text" : reply
      }]};
  var options = {
    "method" : "post",
    "headers" : {
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + channel_token
    },
    "payload" : JSON.stringify(message)
  };
  UrlFetchApp.fetch(url, options);
  return reply;
}


