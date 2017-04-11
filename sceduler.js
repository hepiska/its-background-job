var CronJob = require('cron').CronJob;
// const TelegramBot = require('node-telegram-bot-api');
// const token = '335565888:AAFY41fkpRDvv_XzFTbd8S73sxZV20f_oz0';
// const bot = new TelegramBot(token,{ polling: true });
//let cronfunc=require('./sceduler')

//     new CronJob('*/5 * * * * *', function() {
//     bot.sendMessage(217176354,`lewat cron`)
// }, null, true, 'Asia/Jakarta');

module.exports={
  testcron:function(telegramid){
    new CronJob('*/5 * * * * *', function() {
    bot.sendMessage(telegramid,`lewat cron`)
}, null, true, 'Asia/Jakarta');
  }
}
