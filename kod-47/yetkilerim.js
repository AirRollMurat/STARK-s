const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, msg, args) => {


let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    if (msg.member.hasPermission("ADMINISTRATOR")) x = `<:ss:617640062108303391> `
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = `<:s_:617640062275944449> `
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = `<:ss:617640062108303391> `
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = `<:s_:617640062275944449>`
    if (msg.member.hasPermission("MANAGE_GUILD")) x3 = `<:ss:617640062108303391> `
    if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = `<:s_:617640062275944449> `   
    if (msg.member.hasPermission("MANAGE_ROLES")) x4 = `<:ss:617640062108303391> `
    if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = `<:s_:617640062275944449> `
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = `<:ss:617640062108303391> `
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = `<:s_:617640062275944449> `
    if (msg.member.hasPermission("KICK_MEMBERS")) x6 = `<:ss:617640062108303391> `
    if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = `<:s_:617640062275944449> `
    if (msg.member.hasPermission("BAN_MEMBERS")) x7 = `<:ss:617640062108303391> `
    if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = `<:s_:617640062275944449> `
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = `<:ss:617640062108303391> `
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = `<:s_:617640062275944449> `
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = `<:ss:617640062108303391> `
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = `<:s_:617640062275944449> ` 
    if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = `<:ss:617640062108303391> `
    if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = `<:s_:617640062275944449> `   
    if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = `<:ss:617640062108303391> `
    if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = `<:s_:617640062275944449> `
    
    const embed = new Discord.RichEmbed()
    .setColor('RED')
    .setDescription(`${x} Yönetici\n${x2} Denetim Kaydını Görüntüle\n${x3} Sunucuyu Yönet\n${x4} Rolleri Yönet\n${x5} Kanalları Yönet\n${x6} Üyeleri At\n${x7} Üyeleri Yasakla\n${x8} Mesajları Yönet\n${x9} Kullanıcı Adlarını Yönet\n${x10} Emojileri Yönet\n${x11} Webhook'ları Yönet`)
    msg.channel.send(embed)
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['izinlerim'],
  permLevel: 0,
    kategori: "kullanıcı"
};

exports.help = {
  name: 'yetkilerim',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};

//Emoji Linkleri:

//<:ss:617640062108303391> "https://cdn.discordapp.com/emojis/617640062108303391.png?v=1"
//<:s_:617640062275944449> "https://cdn.discordapp.com/emojis/617640062275944449.png?v=1"
