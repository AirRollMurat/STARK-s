const Discord = require("discord.js");
const db = require('quick.db');
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI2NDgxMTYxMzcwODc0Njc1MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNDgzMDk5MjAwfQ.8tpNASxdSsfkVF7YparhyV1Ouy5ORQ3AM2jitd_Y-PI', client);

exports.run = async (client, message, args) => {
var botcuk = ''
let mesaj = args.slice(0).join(" ")
 let botcuk2 = message.mentions.users.first() || client.users.get(args[0])
 let botcuk3 = client.users.find('username', args.slice(0).join(" "))
 if (!botcuk2) {
   botcuk = botcuk3
 } else {
   botcuk = botcuk3
 }
 if (!botcuk) return message.channel.send('Lütfen bir bot **söyleyin.**')
 if (!botcuk.bot) return message.channel.send('Bu bir **kullanıcı!**')
 dbl.getBot(botcuk.id).then(async bot => {

   const embed = new Discord.RichEmbed()
   .setAuthor(`${bot.username}`, botcuk.avatarURL)
   .setColor("GREEN")
   .addField('ID', bot.id, true)
   .addField('İsim', bot.username, true)
   .addField('Discriminator', bot.discriminator, true)
   .addField('Sertifika', `${bot.certifiedBot ? 'Evet' : 'Hayır'}`, true)
   .addField('Açıklama', bot.shortdesc, true)
   .addField('Kütüphane', bot.lib, true)
   .addField('Prefix', bot.prefix, true)
   .addField('Oylar', bot.points || '0', true)
   .addField('Aylık Oylar', bot.monthlyPoints || '0', true)
   .addField('Sunucu sayısı', bot.server_count || '0',true)
   .addField('Kurucu(lar)', `<@${bot.owners.join('>\n<@')}>`,true) 
   .addField('Etiket(ler)', `${bot.tags}`, true)
   .addField('Linkler', `[Destek Sunucusu](https://discord.gg/${bot.support}) **||** [Github](${bot.github}) **||** [DBL Sayfası](https://discordbots.org/bot/${bot.id})`, true)
   .setThumbnail(botcuk.avatarURL)
   message.channel.send(embed)
});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dblistatistik'],
  permLevel: 0,
  kategori: 'kullanıcı'
};

exports.help = {
  name: 'dblbot',
  description: 'STARK',
  usage: 'Bratva'
};
