const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
      
  if(!args[0]) return message.channel.send(`Lütfen bir seçim giriniz\n${prefix}truckersmp <kullanıcı> <steam id>\n${prefix}truckersmp <trafik>\n${prefix}truckersmp <oyuncular>`)
  
  if(args[0] === 'kullanıcı'){
    
  if(!args[1]) return message.channel.send(`Lütfen bir oyuncunun steam id yazınız. ${prefix}truckersmp kullanıcı steam-id`)
    
    var request = require('request');
request(`https://simsekapi.cf/tmpuye/${args[1]}`, function (error, response, body) {
    if (error) return message.channel.send('Hata:', error);
    else if (!error) {
        var veri = JSON.parse(body);
      
      if(veri.katilmatarihi == undefined) {
        const e = new Discord.RichEmbed()
        .setColor('RED')
        .setDescription('Kullanıcı bulunamadı lütfen doğru id giriniz.')
        message.channel.send(e)
        
        return 
      }
      
      if(veri.profilresmi == undefined) {
        const em = new Discord.RichEmbed()
        .setColor('RED')
        .setDescription('Kullanıcı bulunamadı lütfen doğru id giriniz.')
         message.channel.send(em)
        return 
      }
      
      let sayfa = [`**${veri.kullaniciadi}** Truckers MP Bilgileri
      
      Katılma Tarihi: **${veri.katilmatarihi}**
      Ban Durumu: **${veri.banlimi === 'evet' ? 'Ban Yememiş' : 'Ban Yemiş'}**
      Adminmi: **${veri.adminmi}**
      Grubu: **${veri.grubu}**
      Profil Resmi: **${veri.profilresmi}**
      `]
      
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(sayfa)
        .setThumbnail(veri.profilresmi)
        message.channel.send(embed)
      
    }
});
    return
  }
  
    if(args[0] === 'trafik'){
    
      
 // if(!args[1]) return message.channel.send(`Lütfen bir oyuncunun steam id yazınız. ${prefix}truckersmp kullanıcı steam-id`)
    
    var request = require('request');
request(`https://simsekapi.glitch.me/tmptrafik`, function (error, response, body) {
    if (error) return message.channel.send('Hata:', error);
    else if (!error) {
        var veri = JSON.parse(body);
      
      let sayfa = [`Truckers MP Trafik Durumu
      
      ${veri.birinci}
      ${veri.ikinci}
      ${veri.ucuncu}
      ${veri.dorduncu}
      ${veri.besinci}
      `]
      
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(sayfa)
        .setThumbnail(veri.profilresmi)
        message.channel.send(embed)
      
    }
});
    return
  }
  
  
  if(args[0] === 'oyuncular'){
    
 // if(!args[1]) return message.channel.send(`Lütfen bir oyuncunun steam id yazınız. ${prefix}truckersmp kullanıcı steam-id`)
    
    var request = require('request');
request(`https://simsekapi.glitch.me/tmpsd`, function (error, response, body) {
    if (error) return message.channel.send('Hata:', error);
    else if (!error) {
        var veri = JSON.parse(body);
      
      let sayfa = [`Euro Truck Simulator MP Trafik Durumu
      
     Avrupa 1: **${veri.ets2avrupa1} ${veri.ets2avrupa1do}**
     Avrupa 2: **${veri.ets2avrupa2} ${veri.ets2avrupa2do}**
     Avrupa 3: **${veri.ets2avrupa3} ${veri.ets2avrupa3do}**
     Avrupa 4: **${veri.ets2avrupa4} ${veri.ets2avrupa4do}**

     American Truck Simulator MP Trafik Durumu

     Amerika 1: **${veri.atsamerika} ${veri.atsamerikado}**
     Amerika 2: **${veri.atsavrupa2} ${veri.atsavrupa2do}**

      `]
      
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(sayfa)
        .setThumbnail(veri.profilresmi)
        message.channel.send(embed)
      
    }
});
    return
  }
  
    
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['turckers', 'trucker', 'tmp', 'ets', 'ets2'],
  permLevel: 0,
  kategori: "kullanıcı",
};

exports.help = {
  name: 'truckersmp',
  description: 'Truckersmp trafik, aktif sayısı ve kullanıcı bilgisini verir',
  usage: 'truckersmp',
};
