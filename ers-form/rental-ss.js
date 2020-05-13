function Booking(Row){
  var dat=ss_log.getRange(Row,13,1,8).getValues();
      console.log(dat);
    var bookings = books.getDataRange().getValues();
    var dirId=searchTeam(dat[0][3]);
    var requests = dat[0][6].split(",");
    //console.log(requests+"/"+requests.length);
    var now = new Date();
    var success=[];
    var updated=[];
    var updatedId =[];
    var fail = [];
    if(String(dat[0][4]) == String(dat[0][5])){
      console.log("single date");
      for(var i=0;i<requests.length;i++){
        //console.log(requests[i]);
        var ans = searchBook(requests[i],dat[0][4]);
        if(ans == "no booking"){
          success.push(requests[i]);
        }else{
          if(ans[0] == dat[0][1]){
            books.getRange(ans[1],9).setValue(ans[2]);
            books.getRange(ans[1],11).setValue("updated");
            updatedId.push([books.getRange(ans[1],10).getValue(),ans[2]]);
            updated.push(requests[i])
          }else{
            fail.push(requests[i]);
          }
        }
      }
      //console.log(success+"/"+updated+"/"+fail);
      if(success[0] != null && updated[0] != null){
        books.getRange(requestrow,1,1,11).setValues([[requestrow-1,dat[0][0],dat[0][1],dat[0][2],dat[0][3],dat[0][4],dat[0][5],dirId,success+","+updated,"","confirmed"]]);
        var items=encode(success.join(","))+","+encode(updated.join(","));
        var EventId=SetEvent(items,dat[0][0],dat[0][2],dat[0][4]);
        books.getRange(requestrow,10).setValue(EventId);
        push(dat[0][1],"あなたの申請した以下の機材の貸出予約が完了しました\n"+items);
        if(dat[0][1]!=dirId){
          push(dirId,"あなたの撮影隊で"+dat[0][0]+"さんが申請した以下の機材の貸出予約が完了しました\n"+items);
        }
      }else if(success[0] != null || updated[0] != null){
        books.getRange(requestrow,1,1,11).setValues([[requestrow-1,dat[0][0],dat[0][1],dat[0][2],dat[0][3],dat[0][4],dat[0][5],dirId,success+updated,"","confirmed"]]);
        var items=encode(success.join(","))+encode(updated.join(","));
        var EventId=SetEvent(items,dat[0][0],dat[0][2],dat[0][4]);
        books.getRange(requestrow,10).setValue(EventId);
        push(dat[0][1],"あなたの申請した以下の機材の貸出予約が完了しました\n"+items);
        if(dat[0][1]!=dirId){
          push(dirId,"あなたの撮影隊で"+dat[0][0]+"さんが申請した以下の機材の貸出予約が完了しました\n"+items);
        }
      }
      if(fail[0] != null){
        books.getRange(requestrow+1,1,1,11).setValues([[requestrow-1,dat[0][0],dat[0][1],dat[0][2],dat[0][3],dat[0][4],dat[0][5],dirId,fail,"-","occupied"]]);
        var items=encode(fail);
        push(dat[0][1],"あなたの申請した以下の機材は先約のため予約できませんでした\n"+items);
      }
    }else{
      console.log("multiple date");
      for(var i=0;i<requests.length;i++){
        var ans = searchBooks(requests[i],dat[0][4],dat[0][5]);
        if(ans == "no booking"){
          success.push(requests[i]);
        }else{
          if(ans[0] == dat[0][1]){
            books.getRange(ans[1],9).setValue(ans[2]);
            books.getRange(ans[1],11).setValue("updated");
            updatedId.push([books.getRange(ans[1],10).getValue(),ans[2]]);
            updated.push(requests[i])
          }else{
            fail.push(requests[i]);
          }
        }
      }
      //console.log(success+"/"+updated+"/"+fail);
      if(success[0] != null && updated[0] != null){
        books.getRange(requestrow,1,1,11).setValues([[requestrow-1,dat[0][0],dat[0][1],dat[0][2],dat[0][3],dat[0][4],dat[0][5],dirId,success+","+updated,"","confirmed"]]);
        var items=encode(success .join(","))+","+encode(updated.join(","));
        var EventId=SetEvents(items,dat[0][0],dat[0][2],dat[0][4],dat[0][5]);
        books.getRange(requestrow,10).setValue(EventId);
        push(dat[0][1],"あなたの申請した以下の機材の貸出予約が完了しました\n"+items);
        if(dat[0][1]!=dirId){
          push(dirId,"あなたの撮影隊で"+dat[0][0]+"さんが申請した以下の機材の貸出予約が完了しました\n"+items);
        }
      }else if(success[0] != null || updated[0] != null){
        books.getRange(requestrow,1,1,11).setValues([[requestrow-1,dat[0][0],dat[0][1],dat[0][2],dat[0][3],dat[0][4],dat[0][5],dirId,success+updated,"","confirmed"]]);
        var items=encode(success.join(","))+encode(updated.join(","));
        var EventId=SetEvents(items,dat[0][0],dat[0][2],dat[0][4],dat[0][5]);
        books.getRange(requestrow,10).setValue(EventId);
        push(dat[0][1],"あなたの申請した以下の機材の貸出予約が完了しました\n"+items);
        if(dat[0][1]!=dirId){
          push(dirId,"あなたの撮影隊で"+dat[0][0]+"さんが申請した以下の機材の貸出予約が完了しました\n"+items);
        }
      }
      if(fail[0] != null){
        books.getRange(requestrow+1,1,1,11).setValues([[requestrow-1,dat[0][0],dat[0][1],dat[0][2],dat[0][3],dat[0][4],dat[0][5],dirId,fail,"","occupied"]]);
        var items=encode(fail);
        push(dat[0][1],"あなたの申請した以下の機材は先約のため予約できませんでした\n"+items);
      }
    }
    if(updated[0]!=null){
      var usedId=[];
      for(var i = updatedId.length-1; 0<=i;i--){
        var items=encode(updatedId[i][1]);
        if(usedId.indexOf(updatedId[i][0])==-1 && items == ""){
          cals.getEventById(updatedId[i][0]).deleteEvent();
          books.getRange(ans[1],11).setValue("cancelled");
          usedId.push(updatedId[i][0]);
        }else if(usedId.indexOf(updatedId[i][0])==-1){
          cals.getEventById(updatedId[i][0]).setTitle(FixEvent(items,dat[0][0])).setDescription(items);
        }
      }
    }
}



function searchBooks(equip,pick,reter){
  var npick = new Date(pick);
  var nreter = new Date(reter);
  var bookings = books.getDataRange().getValues();
  for(var j=1;j<bookings.length;j++){
    if(bookings[j][10] != "occupied" || bookings[j][10] != "returned"){
      var items = bookings[j][8].split(",");
      for(var k=0;k<items.length;k++){
        var cpick = new Date(bookings[j][5]);
        var creter = new Date(bookings[j][6]);
        if(items[k] == equip && cpick <= npick && creter >= npick){
          items[k] = "-";
          var itemlist=items.join(",");
          var mes = [bookings[j][2],j+1,itemlist];
          return mes;
        }else if(items[k] == equip && cpick <= nreter && creter >= nreter){
          items[k] = "-";
          var itemlist=items.join(",");
          var mes = [bookings[j][2],j+1,itemlist];
          return mes;
        }else if(items[k] == equip && cpick >= npick && creter <= nreter){
          items[k] = "-";
          var itemlist=items.join(",");
          var mes = [bookings[j][2],j+1,itemlist];
          return mes;
        }
      }
    }
  }
  var mes = "no booking";
  return mes;
}



function searchBook(equip,date){
  var ndate = new Date(date);
  var bookings = books.getDataRange().getValues();
  for(var j=1;j<bookings.length;j++){
    if(bookings[j][10] != "occupied" || bookings[j][10] != "returned"){
      var items = bookings[j][8].split(",");
      for(var k=0;k<items.length;k++){
        var cpick = new Date(bookings[j][5]);
        var creter = new Date(bookings[j][6]);
        if(items[k] == equip && cpick <= ndate && creter >= ndate){
          items[k] = "-";
          var itemlist=items.join(",");
          var mes = [bookings[j][2],j+1,itemlist];
          return mes;
        }
      }
    }
  }
  var mes = "no booking";
  return mes;
}

function encode(items){
  var names=[];
  if(items != null && judge(items)==0){
    var list = items.split(",");
    for(var i = 0;list.length>i;i++){
      if(list[i] != "-"){
        var listlist=list[i].split("-");
        names.push(listlist[1]);
      }
    }
    return names.join(",");
  }else if(items != null){
    if(items != "-"){
      var listlist=items.split("-");
      names.push(listlist[1]);
    }
    return names.join(",");
  }
}

function judge(items){
  try{
    var list = items.split(",");
    return 0;
  }catch(e){
    return -1;
  }
}

function searchTeam(teamcode){
  var teams = teamlist.getDataRange().getValues();
  for(var i=0;teams.length>i;i++){
    if(teams[i][6]==teamcode){
      return teams[i][5];
    }
  }
}