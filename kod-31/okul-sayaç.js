const Discord = require('discord.js');
const ms = require('parse-ms');


exports.run = async(client, message, args) => {
  let okul = new Date('2019-9-9:07:00')
    let zaman = ms(okul - Date.now())


    message.channel.send(`Okulun Açılmasına **0** yıl **0** ay **${zaman.days}** gün **${zaman.hours}** saat **${zaman.minutes}** dakika **${zaman.seconds}** saniye kaldı!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'okul',
  description: '',
  usage: ''
};
