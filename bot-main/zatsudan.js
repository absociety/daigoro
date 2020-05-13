function getReplAiMessage (message) {
  var response = '';
  var payload = {
    "apikey": zatsudan_apikey,
    "query": message
  };
  var param = {
    "method": "POST",
    "payload": payload,
    "muteHttpExceptions":true
  };
  var res = UrlFetchApp.fetch(REPLAI_API_URL, param);
  response =JSON.parse(res.getContentText())["results"][0]["reply"];
    console.log("responce_zatudan: %s",response);
  return response;
}

