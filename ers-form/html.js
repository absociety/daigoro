function getHTML(){
  var targetrow=lastRow;
  var dat=ss_log.getDataRange().getValues();
  var html=[];
  var date=makeDate(new Date(dat[targetrow][1]),"YYYY/MM/DD");
  if(dat[targetrow][2]=="unite"){
    var effective=makeDate(new Date(dat[targetrow][10]),"YYYY/MM/DD");
    html.push("<table><tr><td><h1>申請内容プレビュー</h1></td></tr>");
    html.push("<tr><td>"+"申請日："+date+"</td></tr>");
    html.push("<tr><td>"+"監督："+dat[targetrow][5]+"</td></tr>");
    html.push("<tr><td>"+"タイトル："+dat[targetrow][3]+"</td></tr>");
    html.push("<tr><td>"+"ジャンル："+dat[targetrow][4]+"</td></tr>");
    html.push("<tr><td>"+"作品コード："+dat[targetrow][7]+" ("+effective+" まで有効)</td></tr>");
    html.push("<tr><td>"+"番発で公開予定あり："+dat[targetrow][8]+"</td></tr>");
    html.push("<tr><td>"+"制作著作共にABS："+dat[targetrow][9]+"</td></tr>");
    if(dat[targetrow][11]=="rejected"){
      html.push("<tr></tr><tr><td><p class='error'>不正値があります。</p></td></tr>");
    }
    html.push("</table>")
    html.push('<div class="wrap-button"><div class="button"><button id="submit_button" onclick="window.top.location.href=$$');
    html.push(liff_url_unite+dat[targetrow][6]);
    html.push('$$">戻る</button></div></div>');
  }else if(dat[targetrow][2]=="rent"){
    html.push("<table><tr><td><h1>申請内容プレビュー</h1></td></tr>");
    html.push("<tr><td>"+"申請日："+date+"</td></tr>");
    html.push("<tr><td>"+"名前："+dat[targetrow][12]+"</td></tr>");
    html.push("<tr><td>"+"使用作品："+dat[targetrow][14]+"</td></tr>");
    html.push("<tr><td>"+"貸出日："+makeDate(new Date(dat[targetrow][16]),"YYYY/MM/DD")+"</td></tr>");
    html.push("<tr><td>"+"返却日："+makeDate(new Date(dat[targetrow][17]),"YYYY/MM/DD")+"</td></tr>");
    html.push("<tr><td>"+"借用機材："+String(getEquips(dat[targetrow][18]))+"</td></tr>");
    if(dat[targetrow][19]=="rejected"){
      html.push("<tr></tr>");
      if(dat[targetrow][16]>dat[targetrow][17]){
        html.push("<tr><td><p class='error'>貸出日が返却日よりも遅くなっています。</p></td></tr>");
      }
      html.push("<tr><td><p class='error'>不正値があります。</p></td></tr>");
      html.push("</table>")
      html.push('<div class="wrap-button"><div class="button"><button id="submit_button" onclick="window.top.location.href=$$');
      html.push(liff_url_rental+dat[targetrow][13]);
      html.push('$$">戻る</button></div></div>');
    }else{
      html.push("</table>")
      html.push('<div class="wrap-button"><div class="button"><button id="submit_button" onclick="window.top.location.href=$$');
      html.push(liff_url_rental+dat[targetrow][13]);
      html.push('$$">戻る</button></div></div>');
    }
  }else{
    html.push("<table><tr><td><h1>申請内容プレビュー</h1></td></tr>");
    html.push("<tr><td>"+"申請日："+date+"</td></tr>");
    html.push("<tr><td>"+"名前："+dat[targetrow][20]+"</td></tr>");
    html.push("<tr><td>"+"返却機材："+dat[targetrow][23]+"</td></tr>");
    if(dat[targetrow][24]=="rejected"){
      html.push("<tr></tr>");
      html.push("<tr><td><p class='error'>不正値があります。</p></td></tr>");
    }
    html.push("</table>")
    html.push('<div class="wrap-button"><div class="button"><button id="submit_button" onclick="window.top.location.href=$$');
    html.push(liff_url_return+dat[targetrow][21]);
    html.push('$$">戻る</button></div></div>');
  }
  return html;
}
