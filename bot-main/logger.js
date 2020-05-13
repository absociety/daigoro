function logtalk(mes,ans){
  var newid = ss_log_talk.getLastRow();
  ss_log_talk.appendRow([newid,today,mes,ans]);
}

function logregister(action,stu_id,user_id){
  var newid = ss_log_register.getLastRow();
  ss_log_register.appendRow([newid,today,action,stu_id,user_id]);
}
