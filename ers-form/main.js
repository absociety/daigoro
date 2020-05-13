function doPost(e) {
  var type = e.parameter.act;
  if(type=="unite"){
    unite(e);
  }else if(type=="rent"){
    rent(e);
  }else if(type=="return"){
    retur(e);
  }
  return HtmlService.createTemplateFromFile("index").evaluate(); 
}
