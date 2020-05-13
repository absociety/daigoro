function addst(st,sheet,word) {
  var activerow = 0;
  var currentdat = userlist.getDataRange().getValues();
  var newdat = sheet.getDataRange().getValues();
  var stcol = st%2;
  for(var i=2;currentdat.length > i; i++){
    if(currentdat[i][7] == "active"){
      activerow++;
      var status = currentdat[i][8].split("/");
      if(newdat[activerow][stcol+4] == "" && status[st] == "-"){
        status[st] = word;
      }else if(newdat[activerow][stcol+4] != "" && status[st] != "-"){
        status[st] = "-";
      }
      var join = status.join("/");
      userlist.getRange(i+1,9).setValue(join);
    }
  }
}

function rmst(st,sheet){
  var activerow = 0;
  var currentdat = userlist.getDataRange().getValues();
  var newdat = sheet.getDataRange().getValues();
  var stcol = st%2;
  for(var i=2;currentdat.length > i; i++){
    if(currentdat[i][7] == "active"){
      activerow++;
      var status = currentdat[i][8].split("/");
        status[st] = "-";
      var join = status.join("/");
      userlist.getRange(i+1,9).setValue(join);
    }
  }
}
