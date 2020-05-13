// メニュー作成時はAppsScript管理画面から add_richmenu 関数を手動で実行する。
// ログに記載される返り値にあるrichmenu-～～～をコピー
// 以下のcurlコマンドのrichmenu-～～～へ貼り付けて、コマンド2つをコマンドプロンプト(macはターミナル）から実行

//api_keys.gs内に記載


function add_richmenu(){
    var message = {
            "size": {
                "width": 2500,
                "height": 843
              },
            "selected": true,
            "name": "MAIN MENU uploaded by API",
            "chatBarText": "メニュー※テスト中↑",
            "areas": [
                {
                    "bounds": {
                      "x": 90,
                      "y": 30,
                      "width": 450,
                      "height": 570
                    },
                    "action": {
                      "type": "message",
                      "text": "貸出テスト"
                    }
                  },
                  {
                    "bounds": {
                      "x": 560,
                      "y": 250,
                      "width": 450,
                      "height": 570
                    },
                    "action": {
                      "type": "message",
                      "text": "返却テスト"
                    }
                  },
                  {
                    "bounds": {
                      "x": 1030,
                      "y": 30,
                      "width": 450,
                      "height": 570
                    },
                    "action": {
                      "type": "message",
                      "text": "作品登録"
                    }
                  },
                  {
                    "bounds": {
                      "x": 1500,
                      "y": 250,
                      "width": 450,
                      "height": 570
                    },
                    "action": {
                      "type": "message",
                      "text": "精算"
                    }
                  },
                  {
                    "bounds": {
                      "x": 1970,
                      "y": 30,
                      "width": 450,
                      "height": 570
                    },
                    "action": {
                      "type": "message",
                      "text": "ドライブ"
                    }
                  }
        ]};
      var options = {
        "method" : "post",
        "headers" : {
          "Content-Type" : "application/json",
          "Authorization" : "Bearer " + channel_token
        },
        "payload" : JSON.stringify(message)
      };
      var resp = UrlFetchApp.fetch(url_richmenu, options);
      console.log("richmenu added");
      console.log(resp.getContentText());
      return 0;    
}
