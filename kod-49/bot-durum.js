const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
    var OGON = ayarlar.sahip
      if (args[0] === 'online' || args[0] === "Çevrimiçi" || args[0] === "Online" || args[0] === "çevrimiçi"|| args[0] === "ÇEVRİMİÇİ"|| args[0] === "ONLİNE"|| args[0] === "onlıne"|| args[0] === "ONLINE") {
        if(message.author.id !== OGON)return message.channel.send("Bu komutu kullanmak için uygun izniniz yok.");
        if(OGON) {
        client.user.setStatus("online");
        message.channel.send('Durum "``Çevrimiçi``" olarak değiştirildi.');
        }
    }        
      if (args[0] === 'dnd' || args[0] === "rahatsız etmeyin" || args[0] === "Rahatsız Etmeyin" || args[0] === "DND"|| args[0] === "RAHATSIZ ETMEYİN") {
        if(message.author.id !== OGON) return message.channel.send("Bu komutu kullanmak için uygun izniniz yok.");
        if(OGON) {
        client.user.setStatus("dnd");
        message.channel.send('Durum "``Rahatsız Etmeyin``" olarak değiştirildi.');
        }
    }        
      if (args[0] === 'idle' || args[0] === "İdle" || args[0] === "boşta" || args[0] === "Boşta"|| args[0] === "BOŞTA"|| args[0] === "İDLE") {
        if(message.author.id !== OGON)return message.channel.send("Bu komutu kullanmak için uygun izniniz yok.");
        if(OGON) {
        client.user.setStatus("idle");
        message.channel.send('Durum "``Boşta``" olarak değiştirildi.');
        }
    }        
  
    if (!args[0]) return message.reply('Lütfen istediğiniz durumu belirtin durumlar `dnd`,`online`,`idle`. `!!durum online`');
    
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'durum',
    description: 'STARK',
    usage: 'BRATVA'
  };
