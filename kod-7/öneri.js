const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send("Lütfen önerinizi yazın. Örnek kullanım: ``+öneri Vortex Yardım Komutu Değiştirilmeli.``");
message.reply('Öneri gönderilsin mi? Gönderilmesini istiyorsan `evet` yazman yeterlidir.')
.then(() => {
message.channel.awaitMessages(response =>response.content ==='evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
message.reply('Tavsiyen kurucuma bildirildi!')
const embed2 = new Discord.RichEmbed()
.setColor("GREEN")
.addField(`Kullanıcı ID`,message.author.id,true)
.addField(`Kullanıcı Adı`,message.author.username,true)
.addField(`Kullanıcı Tagı`,message.author.discriminator,true)
.addField(`Sunucu`,message.guild.name,true)
.addField("Öneri", type)
.setTimestamp()
.setFooter('Öneriyi gönderdiği zaman ')
.setThumbnail(message.author.avatarURL)
client.users.get('470974660264067072').send(embed2);
});
});
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['tavsiye'],
  permLevel: 0 
};

exports.help = {
  name: 'öneri',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: 'tavsiye <tavsiyeniz>'
};
