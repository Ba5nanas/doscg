// Reply using AIML, parsing data with AIMLParser

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    let msg = req.body.events[0].message.text
    reply(reply_token,"กรุณารอสักครู่");
        if(msg != "Hello"){

          setTimeout(function(){

            sendnotification(req.body.events[0]);
          },10000);

            //setTimeout(sendnotification, 1000, req.body.events[0]);
        }

    res.sendStatus(200)
})

app.listen(port, () => console.log('server run listening on port 4000'))

function sendnotification(requestObj) {
    var userId = requestObj.source.userId;

    var lineHeader = {
      "Content-Type": "application/json",
      "Authorization": "Bearer eW/VeH8Kep8YLC42d5us8ofY8jsAz/VEs0Xh2d8dgIOhThbjAVaAJdENPfhYVNfIzeZ/lB6tUeEq/JPEjTGrkZjTjTHO9H3LcZMoNNs69/M3lB8OnOadKw7UwuXB8ke/4VIdxwGXh9OgHXr8vTiRYwdB04t89/1O/w1cDnyilFU="
    };

    request.get({
        url: 'https://api.line.me/v2/bot/profile/'+userId,
        headers: lineHeader
    }, (err, res, body) => {
        var mtext = JSON.parse(body);

        pushMsg(mtext.userId,"ระบบไม่สามารถตอบกลับได้");

        request({
            method: 'POST',
            uri: 'https://notify-api.line.me/api/notify',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth: {
              'bearer': "rr1dbPWe9C61BrDm6uRYwyiBEY0k4o2HzY5oOE9x2f0"
            },
            form: {
              message: "\n\r ชื่อ : "+mtext.displayName+"\n\r ข้อความล่าสุด "+ requestObj.message.text +" \n\r ระบบไม่สามารถตอบกลับได้"
            }
          }, (err, httpResponse, body) => {
            if(err){
              console.log(err);
            } else {

            }
          });

    });


}

function pushMsg(userId,msg) {

    let data = {
      to: userId,
      messages: [
        {
          type: 'text',
          text: 'ระบบไม่สามารถตอบกลับได้ จะให้พนักงานของเราติดต่อกลับภายหลัง'
        }
      ]
    }
    request({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eW/VeH8Kep8YLC42d5us8ofY8jsAz/VEs0Xh2d8dgIOhThbjAVaAJdENPfhYVNfIzeZ/lB6tUeEq/JPEjTGrkZjTjTHO9H3LcZMoNNs69/M3lB8OnOadKw7UwuXB8ke/4VIdxwGXh9OgHXr8vTiRYwdB04t89/1O/w1cDnyilFU='
      },
      url: 'https://api.line.me/v2/bot/message/push',
      method: 'POST',
      body: data,
      json: true
    }, function (err, res, body) {
      if (err) console.log('error')
      if (res) console.log('success')
      if (body) console.log(body)
    })
}

function reply(reply_token, msg) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eW/VeH8Kep8YLC42d5us8ofY8jsAz/VEs0Xh2d8dgIOhThbjAVaAJdENPfhYVNfIzeZ/lB6tUeEq/JPEjTGrkZjTjTHO9H3LcZMoNNs69/M3lB8OnOadKw7UwuXB8ke/4VIdxwGXh9OgHXr8vTiRYwdB04t89/1O/w1cDnyilFU='
    }

    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: msg
        }]
    })

    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}
