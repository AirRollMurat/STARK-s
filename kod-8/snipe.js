const Discord = require('discord.js');
const db = require('quick.db');
const moment = require('moment')
module.exports.run = async (client, message, args) => {
      
  var icerik  = db.fetch(`sonmesajicerik_${message.channel.id}`)
  var sahipid = db.fetch(`sonmesajsahipid_${message.channel.id}`)
var avatar = 'https://cdn.discordapp.com/avatars/591021424479698964/338e898baaa9539e312cf48d424d7d47.png?size=2048';
  if(!sahipid) return message.channel.send("<a:h_:591907035553988638> |  Kanalda Hiç Mesaj Silinmemiş")
  else if(!icerik) return message.channel.send("<a:h_:591907035553988638> |  Kanalda Hiç Mesaj Silinmemiş")
    message.channel.send(new Discord.RichEmbed()
                        .setAuthor(`${client.users.get(sahipid).username} (${client.users.get(sahipid).tag})`,client.users.get(sahipid).avatarURL)
                        .setDescription(icerik)
                        .setColor('ORANGE')
      .setFooter(`${sahipid} │ ${moment().format('YYYY/MM/DD')} ${moment().format('HH:mm')} │ ${client.users.get(sahipid).username}`,avatar)
          //.setDescription(`)
      //  .setAuthor(`${client.users.get(sahipid).tag} ${client.users.get(sahipid).avatarURL} (${profil[message.guild.id].isim})`)
        //.setFooter(`${profil[message.guild.id].isim.id} │ ${useful.tarih(tarih)} │ ${message.author.username} `,avatar)

)};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'snipe',  
  description: 'Son mesajı kanala atar.',
  usage: '!!snipe'
};
