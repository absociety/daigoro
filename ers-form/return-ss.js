function killBooking(rowlist,Row,items,userid,name){
  console.log("killbooking");
  var rows = rowlist.split(",");
  var success=[];
  var fail=[];
  var request=ss_log.getRange(Row,20,1,5).getValues();
  var dat=books.getDataRange().getValues();
  for(var i=0;i<rows.length;i++){
    if(new Date(dat[rows[i]][5]) <= date){
      books.getRange(parseInt(rows[i])+1,11).setValue("returned");
      returnEvent(dat[rows[i]][9],encode(dat[rows[i]][8]),name);
    }else{
      books.getRange(parseInt(rows[i])+1,11).setValue("cancelled");
      killEvent(dat[rows[i]][9]);
    }
    if(userid != dat[rows[i]][7]){
      push(dat[rows[i]][7],"あなたの撮影隊で"+name+"さんが申請した以下の機材の返却処理が完了しました\n"+items);
    }
  }
  push(userid,"あなたの申請した以下の機材の返却処理が完了しました\n"+items);
}

