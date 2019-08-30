const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  
let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`Bu işlemi gerçekleştirmem için "\`Rolleri Yönet\`" yetkisine sahip olmalıyım.`)   
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`);
  let mesaj = args.slice(0).join(' ')
  let otorol= db.fetch(`otorol_${message.guild.id}`)
  let rol = message.mentions.roles.first()
  let rolk = message.mentions.channels.first() 
  if(mesaj === "kapat") {
    if(!otorol) {
      message.channel.send(`Bu sunucuda otorol ayarlanmamış.`)
      return
    } 
    db.delete(`otorol_${message.guild.id}`)
    db.delete(`otolog_${message.guild.id}`)
    message.channel.send(`Otorol başarıyla kapatıldı.`)
    return
  }
  if (!rol) return message.channel.send(`Giriş yapanlara vereceğim rolü belirtmelisin. Örnek: \`${prefix}otorol @Rol #Kanal\``)
  if (!rolk) return message.channel.send(`Rol verildiğinde bildirimin gideceği kanalı belirtmelisin. Örnek: \`${prefix}otorol @Rol #Kanal\``)
  
  db.set(`otorol_${message.guild.id}`, rol.id)
  db.set(`otolog_${message.guild.id}` ,rolk.id)
  
  message.channel.send(`Giriş yapanlara verilecek rol \`${rol.name}\`, bildirimin gideceği kanal ise ${rolk} olarak ayarlandı.`)
  
  };
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['girişrol'],
    permLevel: 0
};
exports.help = {
    name: 'otorol',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'otorol <@rol>'
};
