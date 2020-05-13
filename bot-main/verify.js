function verify(e){
  console.log("call veryfy");
  var userId = e.source.userId;
  console.log("userId is %s" , userId);
  console.log("text is %s", e.message.text);
  
  var userrow = findRow(ss_users, userId, 10)
  if(userrow != -1){
    if(ss_users.getRange(userrow, 8).getValue() == "active" && ss_users.getRange(userrow, 9).getValue().slice(0,1) == "-"){
      
    //何かするならこの中で。とりあえず確認できた旨
    var text = "部員情報が確認できました。";
    command(e);
    return 0;
    }else if(ss_users.getRange(userrow, 8).getValue() == "active" && ss_users.getRange(userrow, 9).getValue().slice(0,10) == "unfollowed"){
      if(addUser(e.message.text, userId) != -1){
        //再登録処理の結果の返り値を判定
        var text = "部員情報を登録しました。";  //登録成功
        logregister("signup",e.message.text,userId);
      }else{
        var text = "部員情報が確認できませんでした。正しい学生番号を入力してください。"; //登録時にidが見つからなかった場合
      }
    }else if(ss_users.getRange(userrow, 8).getValue() == "expired" && ss_users.getRange(userrow, 9).getValue().slice(0,10) == "unfollowed"){
      if(addUser(e.message.text, userId) != -1){
        //再登録処理の結果の返り値を判定
        var text = "部員情報を登録しました。";  //登録成功
        logregister("signup",e.message.text,userId);
      }else{
        var text = "部員情報が確認できませんでした。正しい学生番号を入力してください。"; //登録時にidが見つからなかった場合
      }
    }else{
      var text = "部員資格失効です。ブロック＆ブロック解除で再登録をお願いします。";
    }
    
    //}else if(findRow(ss_unauth, userId, 0) != -1){
    //一度会話したが、id未登録のユーザーを判定
  }else if(addUser(e.message.text, userId) == -1){
    //登録処理の結果の返り値を判定
    var text = "部員情報が確認できませんでした。正しい学生番号を入力してください。"; //登録時にidが見つからなかった場合
    
  }else if(addUser(e.message.text, userId) == -2){
    var text = "部員資格失効です。";
  }else{
    var text = "部員情報を登録しました。";  //登録成功
    logregister("signup",e.message.text,userId);
  }
  
  //}else{
  //  var text = "認証情報が確認できませんでした。登録をお願いします。";    //単純に未登録
  //}
  
  send(e,text);
}

//https://tonari-it.com/gas-spreadsheet-find/

function findRow(sheet,val,col){
  
  var dat = sheet.getDataRange().getValues(); //受け取ったシートのデータを二次元配列に取得
  //console.log("dat is %s", dat);
  for(var i=dat.length-1; i>0; i--){
    //console.log("id is %s", dat[i][col-1]);
    if(dat[i][col-1] === val){
      //console.log("found! %s", i+1);
      return i+1;
      //console.log("id is %s", dat[i][col-1]);
    }
  }
  return -1;
}

function findRows(sheet,val,col){
  
  var dat = sheet.getDataRange().getValues(); //受け取ったシートのデータを二次元配列に取得
  var rows = [];
  for(var i=dat.length-1; i>0; i--){
    //console.log("id is %s", dat[i][col-1]);
    if(dat[i][col-1] === val){
      //onsole.log("found! %s", i+1);
      rows.push(i+1);
    }
  }
  if(rows === []){
  return -1;
  }else{console.log("rows is %s",rows);return rows;}
}

function addUser(stu_num, userId){
  var num = stu_num -0;
  //console.log("num is %s",num);
  var row = findRow(ss_users, num, 5);
  if(row != -1){
    if(ss_users.getRange(row, 8).getValue() == "active" ){
      ss_users.getRange(row, 10).setValue(userId);
        ss_users.getRange(row, 9).setValue("-/-/-/-/-");
      var st = ss_users.getRange(row, 9).getValue().replace("unfollowed","-");
      ss_users.getRange(row, 9).setValue(st);
      
      var get_url = url_prof + userId
      var options = {
        "method" : "get",
        "headers" : {
          "Authorization" : "Bearer " + channel_token
        }
      };
      var profile = JSON.parse( UrlFetchApp.fetch(get_url, options).getContentText() );
      var displayName = profile.displayName
      console.log("dispayName is %s", displayName);
      ss_users.getRange(row, 11).setValue(displayName);
      
      return row;
    }else{
      return -2;
    }
  }else{
    return -1;
  }
}


