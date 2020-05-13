function SetEvent(items,name,team,sdate){
  var list = items.split(",");
  if(list.length>1){
    var thing = list[0]+"ほか"+"/"+name
  }else{
    var thing = items+"/"+name
  }
  return cals.createAllDayEvent(thing,new Date(sdate),{description:items,location:team}).setColor(CalendarApp.EventColor.GREEN).getId();
}

function SetEvents(items,name,team,sdate,edate){
  var list = items.split(",");
  if(list.length>1){
    var thing = list[0]+"ほか"+"/"+name
  }else{
    var thing = items+"/"+name
  }
  return cals.createAllDayEvent(thing,new Date(sdate),new Date(edate),{description:items,location:team}).setColor(CalendarApp.EventColor.GREEN).getId();
}

function FixEvent(items,name){
  var list = items.split(",");
  if(list.length>1){
    var thing = list[0]+"ほか"+"/"+name
  }else{
    var thing = items+"/"+name
  }
  return thing;
}

function returnEvent(id,items,name){
  var list = items.split(",");
  if(list.length>1){
    var thing = list[0]+"ほか"+"/"+name
  }else{
    var thing = items+"/"+name
  }
  return cals.getEventById(id).setTitle("【返却済】"+thing);
}

function killEvent(id){
  return cals.getEventById(id).deleteEvent();
}