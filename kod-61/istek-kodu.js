const Discord = require('discord.js');
const db = require('quick.db');
exports.run = function(client, message, args) {
  let istek = args[0];
  let a = Math.floor(Math.random()*(1000)+9999)
  if(!istek)return message.channel.send('Lütfen `!istek [istek]` olarak yazınız.');
  message.reply('İsteğin bildirildi.').then(x => x.delete(10000))
  let chan = client.channels.get('675393594793656340');
  var red_emoji = "🟥";
 var kabul_emoji = "🟩";
  var embed = new Discord.RichEmbed()
  .setColor("GOLD")
  .setAuthor("İstek No#"+a+" [BEKLEMEDE]","https://cdn.discordapp.com/attachments/675393594793656340/675457700154310696/Adsz.png")
  .setFooter(client.users.get(db.get(`sahip_${message.author.id}`)).tag+"("+client.users.get(db.get(`sahip_${message.author.id}`)).id+")",client.users.get(db.get(`sahip_${message.author.id}`)).avatarURL)
  .setDescription(istek);
  chan.send(embed).then(mesaj => {
          mesaj.react(kabul_emoji);
          mesaj.react(red_emoji);
    db.set(`sahip_${mesaj.id}`, message.author.id);
    db.set(`istek_${mesaj.id}`, istek)
    db.set(`sura_${mesaj.id}`,a)
          db.set(`edit_${mesaj.id}`, mesaj.id);
          db.set(`evet_${mesaj.id}`, 0);
          db.set(`hayir_${mesaj.id}`, 0);
        });
};
exports.conf = {
  enabled: true,  
  guildOnly: false,  
  aliases: [''], 
  permLevel: 0  
};

exports.help = {
  name: 'istek', 
  description: '',  
  usage: '' 
};
