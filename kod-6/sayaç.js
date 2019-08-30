const Discord = require('discord.js')
const fs = require('fs')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

var prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  const kanal = message.mentions.channels.first() 
  const sayac = args[0]
  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
    if(sayac === "sıfırla") {
    if(!sayacsayi) {
      message.channel.send(`Ayarlanmayan şeyi sıfırlayamazsın.`)
      return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayackanal_${message.guild.id}`)
    message.channel.send(`<a:a_:591907033721077780> Sayaç başarıyla sıfırlandı. Artık sayaç sayılmayacak.`)
    return
  }
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`);
if (!sayac) return message.channel.send(`Bir sayaç sayısı belirtmelisin. \`${prefix}sayaç <sayı> #Kanal\``);
if(isNaN(sayac)) return message.channel.send(`Geçerli bir sayaç sayısı belirtmelisin. \`${prefix}sayaç <sayı> #Kanal\``);
if(sayac <= message.guild.members.size) return message.channel.send(`Sunucudaki kullanıcı sayısından (${message.guild.members.size}) daha yüksek bir değer girmelisin.`);
if (!kanal) return message.channel.send(`<a:a_:591907033721077780> Sayaç bildiriminin gideceği kanalı belirtmelisin. \`${prefix}sayaç <sayı> #Kanal\``);

  db.set(`sayac_${message.guild.id}`, sayac)
  db.set(`sayackanal_${message.guild.id}`, kanal.name) 
  
 message.channel.send(`Bundan sonra kullanıcı sayısı hedefi olarak \`${sayac}\`, bildirimin gideceği kanal ise <#${kanal.id}> olarak ayarlandı.`)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sayacayarla', 'sayac', 'sayaçayarla', 'sayac-ayarla', 'sayaç-ayarla'],
    permLevel: 0
};
exports.help = {
    name: 'sayaç',
    description: 'Sayacı ayarlar.',
    usage: 'sayaç <sayı> <#Kanal> /' + prefix + 'sayac sıfırla'
};
