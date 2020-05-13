function follow(e){
  console.log("call follow");
  var message = {
    "replyToken" : e.replyToken,
    "messages" : [{
      "type": "text",
      "text" : "フォローありがとうございます！！\nABS技術局長のダイゴロウです。\n皆さんの放研生活をお手伝いするのがわたしの仕事なので困ったことがあったらなんでも言ってください！\n\nこれからよろしくお願いしますね！"
    },{
      "type": "sticker",
      "packageId": "11539",
      "stickerId": "52114131"
    },{
      "type": "text",
      "text" : "まずはあなたのことを教えてください！\n学生番号を入力してください。"
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
  
}

function unfollow(e){
  console.log("call unfollow");
  var userId = e.source.userId;
  console.log("userId is %s" , userId);
  var row = findRows(ss_users, userId, 10);
  console.log("userrow is %s" , row);
  
  for(var i=0 ; i < row.length; i++){
    var status = ss_users.getRange(row[i], 9).getValue().split("/");
    status[0] = "unfollowed";
    var join =status.join("/");
    ss_users.getRange(row[i], 9).setValue(join);
  }
  
  var stu_num = ss_users.getRange(row[0], 5).getValue();
  var displayName = ss_users.getRange(row[0], 11).getValue();
  logregister("unfollowed",stu_num,userId,displayName);

}


//(20200415)getRangeは後でgetDatarangeに変更する