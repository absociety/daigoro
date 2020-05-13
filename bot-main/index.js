function doPost(e){
  var json = e.postData.contents
  var events = JSON.parse(json).events;
  
  events.forEach(function(event) {
    if(event.type == "follow") {
      follow(event);
    }else if(event.type == "unfollow"){
      unfollow(event);
    }else if(event.type == "message"){
      if(event.message.type == "text"){
        if(event.source.type == "user"){
          verify(event);
        }else if(event.source.type == "room"){
          verify(event);
        }
      }else{
        send(event,"文字以外は反応できないんです、ごめんなさい。");
      }
    }
 });
}