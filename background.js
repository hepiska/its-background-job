const TelegramBot = require('node-telegram-bot-api');
const token = '335565888:AAFY41fkpRDvv_XzFTbd8S73sxZV20f_oz0';
var CronJob = require('cron').CronJob;
const bot = new TelegramBot(token, {
    polling: true
});
var kue = require('kue'),
    queue = kue.createQueue();


function sendchat(data, done) {
    //  console.log("-----",data);
    if (!data.to) {
        console.log('error');
        //done('invalid to address') is possible but discouraged
        return done(new Error('invalid to address'));
    }
    //console.log('harusnya ngirim');
    bot.sendMessage(data.to, data.chat)
    done();
}



bot.onText(/\/scedule\s.+/, (msg, match) => {
    let chatId = msg.chat.id;
    let chatText = msg.text.split(' ');
    chatText.shift();
    let text = chatText[2]
    let date = chatText[0].split('-');
    date.push('*')
    let time = chatText[1].split('.').reverse();
    time.unshift('1')
    let datetime = time.concat(date).join(' ')
    console.log(datetime);
    typeof(datetime)
    new CronJob(datetime, function() {
      console.log('---', datetime);
      var sendscedule = queue.create('reminder', {
          to: chatId,
          chat: text
      }).save(function(err) {
          if (!err) console.log(sendscedule.id);
      });
      queue.process('reminder', function(sendscedule, done) {
          sendchat(sendscedule.data, done);
      });
    }, null, true, 'Asia/Jakarta');


});
