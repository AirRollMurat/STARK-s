const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`)
  if (!args[0]) return message.channel.send(`Link engelleme fitresini ne yapacağım? Aç ya da kapat yaz. \`${prefix}link-engel <aç/kapat>\``)
  
  if (args[0] == 'aç') {
    db.set(`link_${message.guild.id}`, true)
   message.channel.send('<a:a_:591907033721077780> Link engelleme filtresi başarıyla açıldı.'); 

  };
  if (args[0] == 'kapat') {
    db.set(`link_${message.guild.id}`, false)  
    message.channel.send('<a:a_:591907033721077780> Link engelleme filtresi başarıyla kapatıldı.'); 
  };

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklam','link','link-engelle','reklamengel','reklamkoruması','reklam-engelle','reklam-engel'],
  permLevel: 2
  };

exports.help = {
  name: 'link-engelleme',
  description: 'Klink engelleme sistemini açarsınız/kapatırsınız.',
  usage: 'link-engelleme'
};
