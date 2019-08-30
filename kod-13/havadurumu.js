const Discord = require('discord.js');
const weather = require('weather-js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
if(!args.join(" ")) return message.channel.send("Bir konum belirtin.")
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
     
    if (err) message.channel.send(err);
          if (result === undefined || result.length === 0) {
          message.channel.send('<a:h_:591907035553988638> Lokasyon/Bölge Bulunamadı..')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setColor('GREEN')
          .addField('Şehir Ülke',`${current.observationpoint}`,true)
           .addField('Hava',`${current.temperature} Derece`, true)
           .addField('Durum',`${current.skytext}`,true)
          .addField('Hissedilen Sıcaklık', `${current.feelslike} Derece`, true)
          .addField('Rüzgar',current.winddisplay, true)
          .addField('Nem', `${current.humidity}%`, true)
              .setFooter('Son güncelleme tarihi | '+ `${moment().format('YYYY-MM-DD HH:mm:ss')}`,message.author.avatarURL)
          message.channel.send({embed});
  })
}
module.exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['hava'],
 permLevel: 0
}
module.exports.help = {
  name:"havadurumu",
 description:"Havadurumu",
usage:"havadurumu [lokasyon]"
}
