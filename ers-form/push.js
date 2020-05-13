function push(user_id,text){ 
  var message = {
    "to" : user_id,
    "messages" : [{
        "type": "text",
        "text" : text
      }]};
  var options = {
    "method" : "post",
    "headers" : {
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + channel_token
    },
    "payload" : JSON.stringify(message)
  };
  UrlFetchApp.fetch(url_push, options);
}
