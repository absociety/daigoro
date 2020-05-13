function retur(e) {
  var equips=JSON.stringify(e.parameters.equips);
  var rows=equips.split("-");
  var items=[];
  var ids=[];
  for(var i=0;rows.length>i;i++){
    if(i==0){
      ids.push(getList(rows[i]));
    }else if(i==rows.length-1){
      items.push(getList(rows[i]));
    }else{
      var list=rows[i].split(",");
      ids.push(getList(list[list.length-1]));
      for(var j=0;j<list.length-1;j++){
        items.push(getList(list[j]));
      }
    }
  }
  ids=getList(JSON.stringify(ids.join(",")));
  items=getList(JSON.stringify(items.join(",")));
  var type = e.parameter.act;
  var userid = e.parameter.id;
  var name=checkName2(names,userid);
  if(name == "Your id is not found."){
    ss_log.appendRow([lastRow,new Date(),type,"","","","","","","","","","","","","","","","","",name,userid,ids,items,"rejected"]);
  }else{
    ss_log.appendRow([lastRow,new Date(),type,"","","","","","","","","","","","","","","","","",name,userid,ids,items,"confirmed"]);
    killBooking(ids,lastRow+1,items,userid,name);
  }
  changestate_byuser_id(userid);
}

function checkName2(data,app){
  var name = "Your id is not found.";
  for(var i =0 ;i<data.length; i++){
    if(data[i][9] == app){

        name = data[i][1];
        return name;
      
    }
  }
  return name;
}