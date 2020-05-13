function unite(e) {
  var title=e.parameter.title;
  var type = e.parameter.act;
  var genre=e.parameter.genre;
  var pub = checkAns(e.parameter.pub);
  var member =checkAns(e.parameter.member);
  var teamcode=e.parameter.team;
  var id = e.parameter.id;
  var effective_date=new Date(date.getYear()+2,date.getMonth(),date.getDate());
  var director = checkName(names,id);
  var team = checkTeam(teams,teamcode);
  if(director == "Your id is not found." || team == "This team-code is already used." || director == "Your account seems to have some problems. Please contact admin."){
    ss_log.appendRow([lastRow,date,type,title,genre,director,id,team,pub,member,effective_date,"rejected"]);
    setTeams();
  }else{
    ss_log.appendRow([lastRow,date,type,title,genre,director,id,team,pub,member,effective_date,"confirmed"]);
    setTeams();
  }
}

function checkName(data,app){
  var name = "Your id is not found.";
  for(var i =0 ;i<data.length; i++){
    if(data[i][9] == app){
      if(data[i][8]!="-/-/-/-/-"){
        name = "Your account seems to have some problems. Please contact admin."
      }else{
        name = data[i][1];
        return name;
      }
    }
  }
  return name;
}

function checkTeam(data,app){
  var name = app;
  for(var i = 1 ;i<data.length; i++){
    if(data[i][6] == app){
      name = "This team-code is already used.";
      return name;
    }
  }
  return name;
}

function checkAns(pub){
  if(pub == null){
    var ans = "NO";
    return ans;
  }else{
    var ans = "YES";
    return ans;
  }
}

function makeDate(dat, format) {
  
  format = format.replace(/YYYY/, dat.getFullYear());
  format = format.replace(/MM/, dat.getMonth() + 1);
  format = format.replace(/DD/, dat.getDate());
  
  return format;
}