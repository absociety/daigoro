function command(e){
  if(e.message.text == "放研荒れてて草") {
    send(e,kusaww());
  }else if(e.message.text == "貸出"){
    send(e,rent_str);
  }else if(e.message.text == "貸出テスト"){
    send(e,rent_str_test+e.source.userId);
  }else if(e.message.text == "返却テスト"){
    send(e,return_str_test+e.source.userId);
  }else if(e.message.text == "作品登録"){
    send(e,addmovie_str+e.source.userId);
  }else if(e.message.text == "返却"){
    send(e,return_str);
  }else if(e.message.text == "精算"){
    send(e,expense_str);
  }else if(e.message.text == "ドライブ"){
    send(e,drive_str);    
  }else if(e.message.text == "機材見せて"){
    send(e,equipment_str);
  }else if(chk_kanato(e)){
    push_to_kanato(e.message.text);
    send(e,"松本に送りつけときますね");
  }else{
    send(e,reply(e));
  }
  
}

