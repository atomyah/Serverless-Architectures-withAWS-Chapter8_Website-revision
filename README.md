第8章のupload-controller.jsスクリプトはうごかーん😭


わかりやすくするために教科書通りのmain.js(`$.(document).ready(function()...`)を使ってない、config.jsも使ってないので、クラシックな書き方にupload-controller.jsを改造。

さらに、$.ajaxを使ってアップロードする部分、`url: data.upload_url`だと"変数data.upload_urlはhttps://s3.amazonaws.com/serverless-video-upload になってしまう。
これだと、"Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource"のエラー😭

エンドポイントを指し示す`url: 'https://s3-ap-northeast-1.amazonaws.com/p332-serverless-video-upload'`;
にハードコード。


最後に、チャプター５でCognito使用に変更したからindex.htmlには常にアップロードボタンがあっていいので`display: inline-block`に変更。（オリジナルは`none`）。

    #upload-video-button {
    display: inline-block;
    margin-bottom: 30px;
    }


***


Hey, upload-controller.js script of Chapter8 doesn't work😭

Firstly I modified it to be a classic style, as I don't want to use main.js($.(document).ready(function()...) in the textbook to understand simplily. config.js also is gotten rid of as I noted in chapter7.


Furthermore, line 45,`url: data.upload_url`, the variable data.upload_url is "https://s3.amazonaws.com/serverless-video-upload".

It spits error, "Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource"

Hard coded it to put region access point, in the case of Tokyo East, `url: 'https://s3-ap-northeast-1.amazonaws.com/p332-serverless-video-upload'`


Lastly, as I revised to use Cognito, index.html should display always upload button. Therefore modified main.css `display: inline-block` from `none`
    #upload-video-button {
    display: inline-block;
    margin-bottom: 30px;
    }

