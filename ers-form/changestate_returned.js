function changestate_byuser_id(userid){
    var booking=books.getDataRange().getValues();
    var currentdat = userlist.getDataRange().getValues();
    for(var row=1; row<booking.lengh; row++){
        if(booking[row][2]=userid){
            if(booking[row][10]="overdue"){
                return 0;
            }
        }
    }
    var userrows = findRows(userlist, booking[row][2], 10);
    for(var i=userrows.length; i>0; i--){
        var userrow = userrows[i-1];
        var status = currentdat[userrow-1][8].split("/");
        //console.log(status);
        status[4] = "";
        var join = status.join("/");
        userlist.getRange(userrow,9).setValue(join);
}
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