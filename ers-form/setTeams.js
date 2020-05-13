function setTeams() {
  var dat=ss_log.getDataRange().getValues();
  var now = new Date();
  var teams=[];
  var expired = [];
  for(var row=1;row<dat.length;row++){
    if(dat[row][2]=="unite" && dat[row][11] == "confirmed"){
      if(dat[row][10]>=now){
        teams.push([dat[row][0],dat[row][1],dat[row][3],dat[row][4],dat[row][5],dat[row][6],dat[row][7],dat[row][8],dat[row][9]]);
      }else{
        expired.push([dat[row][0],dat[row][1],dat[row][3],dat[row][4],dat[row][5],dat[row][6],dat[row][7],dat[row][8],dat[row][9]]);
      }
    }
  }
  teamlist.getRange("A2:I").clearContent();
  teamlog.getRange("A2:I").clearContent();
  if(teams.length != 0){
    teamlist.getRange(2,1,teams.length,9).setValues(teams);
  }
  if(expired.length != 0){
    teamlog.getRange(2,1,expired.length,9).setValues(expired);
  }
}
