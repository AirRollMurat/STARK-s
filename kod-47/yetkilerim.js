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

    var tik = `${client.emojis.get("617640062108303391")}`
    var cross = `${client.emojis.get("617640062275944449")}`
    
    if (msg.member.hasPermission("ADMINISTRATOR")) x = `${tik} `
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = `${cross} `
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = `${tik} `
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = `${cross} `
    if (msg.member.hasPermission("MANAGE_GUILD")) x3 = `${tik} `
    if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = `${cross} `   
    if (msg.member.hasPermission("MANAGE_ROLES")) x4 = `${tik} `
    if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = `${cross} `
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = `${tik} `
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = `${cross} `
    if (msg.member.hasPermission("KICK_MEMBERS")) x6 = `${tik} `
    if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = `${cross} `
    if (msg.member.hasPermission("BAN_MEMBERS")) x7 = `${tik} `
    if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = `${cross} `
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = `${tik} `
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = `${cross} `
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = `${tik} `
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = `${cross} ` 
    if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = `${tik} `
    if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = `${cross} `   
    if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = `${tik} `
    if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = `${cross} `
    
    const embed = new Discord.RichEmbed()
    .setColor('RED')
    .setDescription(`${x} Yönetici\n${x2} Denetim Kaydını Görüntüle\n${x3} Sunucuyu Yönet\n${x4} Rolleri Yönet\n${x5} Kanalları Yönet\n${x6} Üyeleri At\n${x7} Üyeleri Yasakla\n${x8} Mesajları Yönet\n${x9} Kullanıcı Adlarını Yönet\n${x10} Emojileri Yönet\n${x11} Webhook'ları Yönet`)
    msg.channel.send(embed)
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['izinlerim'],
  permLevel: 0
};

exports.help = {
  name: 'yetkilerim',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};

//Emoji Linkleri:

//<:ss:617640062108303391> "https://cdn.discordapp.com/emojis/617640062108303391.png?v=1"
//<:s_:617640062275944449> "https://cdn.discordapp.com/emojis/617640062275944449.png?v=1"
