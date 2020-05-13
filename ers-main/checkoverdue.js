function checkoverdue(){
    var dat=ss_log.getDataRange().getValues();
    var booking=books.getDataRange().getValues();
    console.log(booking[1][10]);
    var now = new Date();
    console.log("now is %s",now);
    var yesterday =new Date(now.getFullYear(), now.getMonth(), now.getDate()-1);
    console.log("yesterday is %s", yesterday);
    // var overdue_user=[];
    var currentdat = userlist.getDataRange().getValues();

    for(var row=1; row<booking.length; row++){
        if(booking[row][10]=="confirmed" || booking[row][10]=="updated"){
            console.log("booking[row][6] is %s", booking[row][6]);
            if(booking[row][6]<=yesterday){
                console.log("booking[row][6]<=yesterday");
                bookinglist_books.getRange(row+1,11).setValue("overdue");
                // overdue_user.push(booking[row][2]);
                console.log("found overdue");
                console.log("userId is %s", booking[row][2]);
                var userrows = findRows(userlist, booking[row][2], 10);
                console.log("userrow.length is %s", userrows.length);
                for(var i=userrows.length; i>0; i--){
                    var userrow = userrows[i-1];
                    var status = currentdat[userrow-1][8].split("/");
                    console.log(status);
                    status[4] = "overdue";
                    var join = status.join("/");
                    userlist.getRange(userrow,9).setValue(join);
                }
            }
        }
    }
}

function change_userstate(userId, status_no, status){

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
  