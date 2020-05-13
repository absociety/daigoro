function rent(e) {
  var pickup=makeDate(new Date(e.parameter.pickup),"YYYY/MM/DD");
  var equiplist=JSON.stringify(e.parameters.equips);
  var equips = String(getList(equiplist));
  var retur=makeDate(new Date(e.parameter.retur),"YYYY/MM/DD");
  var type = e.parameter.act;
  var team=e.parameter.team;
  var id = e.parameter.id;
  var name=checkName(names,id);
  var teamname=checkTeamname(teams,team);
  if(new Date(e.parameter.pickup)>new Date(e.parameter.retur) || name == "Your id is not found." || teamname == "This team-code is not found." || name == "Your account seems to have some problems. Please contact admin."){
    ss_log.appendRow([lastRow,new Date(),type,"","","","","","","","","",name,id,teamname,team,pickup,retur,equips,"rejected"]);
  }else{
    ss_log.appendRow([lastRow,new Date(),type,"","","","","","","","","",name,id,teamname,team,pickup,retur,equips,"confirmed"]);
    Booking(lastRow+1);
  }
}

function getList(list) {
  var equips =[];
  var split = list.split(",");
  for(var i=0;split.length>i;i++){
    var equip =split[i].replace("[", "").replace("]","").replace('"','').replace('"','');
    equips.push(equip);
  }
  return equips.join(",");
}

function getEquips(list) {
  var equips =[];
  var split = list.split(",");
  for(var i=0;split.length>i;i++){
    var equip =split[i].split('-');
    equips.push(equip[1]);
  }
  return equips;
}

function relist(str){
  var one=JSON.stringify(str);
  var two=one.split(',');
  var three=[];
  for(var i=0;i<two.length;i++){
    three.push(two[i].split(','));
  }
  return three;
}

function checkTeamname(data,app){
  var name = "This team-code is not found.";
  for(var i = 1 ;i<data.length; i++){
    if(data[i][6] == app){
      name = data[i][2];
      return name;
    }
  }
  return name;
}