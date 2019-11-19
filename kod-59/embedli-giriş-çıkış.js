const Discord = require('discord.js')
const db = require('quick.db');
const p = require('../ayarlar.json')
exports.run = async (client, message, args) => {
 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bu komutu kullanabilmek için `Yönetici` iznine sahip olmalısın!");
  
    let kanal = message.mentions.channels.first();
    if (!kanal) return message.channel.send('Lütfen bir kanal belirtin. \nEğer kapatmak istiyorsanız `'+ p.prefix +'kapat gelen-giden` yazınız.')
   let t = await db.set(`starkcode_${message.guild.id}`, kanal.id)
      return message.channel.send(`Giriş çıkış kanalı başarıyla <#${t}> olarak **ayarlandı!**`)
};
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,

}

exports.help = {
    name: 'giriş-çıkış',
    description: 'Gelen giden kanalını belirler.',
    usage:"Stark Code"
}
