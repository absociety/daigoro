function clear(){
  if(date.getMonth() == 2){
  buhitori.getRange("D13").clearContent();
  buhitori.getRange("D16").clearContent();
  shintori.getRange("D13").clearContent();
  }
  paidcheck();
}

function paidcheck(){
  console.log(defoult);
  if(zenkibuhi != defoult){
    if(zenkibuhi < date){
      console.log("check prosess.");
      addst(1,buhik,"unpaid(zenkibuhi)");
    }else{
    console.log("wrong prosess.");
    console.log(zenkibuhi);
    }
  }else{
    console.log("reset prosess.");
    rmst(1,buhik);
  }
  
  if(koukibuhi != defoult){
    if(koukibuhi < date){
      console.log("check prosess.");
      addst(2,buhik,"unpaid(koukibuhi)");
    }else{
    console.log("wrong prosess.");
      console.log(koukibuhi);
    }
  }else{
    console.log("reset prosess.");
    rmst(2,buhik);
  }
  
  if(shinkanhi != defoult){
    if(shinkanhi < date){
      console.log("check prosess.");
      addst(3,shinkank,"unpaid(shinkanhi)");
    }else{
    console.log("wrong prosess.");
      console.log(shinkanhi);
    }
  }else{
    console.log("reset prosess.");
    rmst(3,shinkank);
  }
}