function chk_kanato(e){
  if(e.message.text.substr(0,3) == "かなと" || e.message.text.substr(0,2) == "哉人" || e.message.text.substr(0,2) == "奏斗" || e.message.text.substr(0,2) == "松本" || e.message.text.substr(0,4) == "まつもと"){
    return 1;
  }
}

function push_to_kanato(text){
  push("U4f321628e29e245924ad33bc38af3815",text);
  return 0;
}

function push_to_kanato_dev(){
  push("U4f321628e29e245924ad33bc38af3815","push_to_canato");
  return 0;
}