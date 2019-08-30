
const Discord = require('discord.js');

exports.run = (client, message, args) => { 
    var Jimp = require("jimp");
    const Discord = require('discord.js');
    let img    = Jimp.read(message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL),
    moldura = Jimp.read("https://cdn.discordapp.com/attachments/560817035366498315/597489321578201091/Untitled-1.png");
    Promise.all([img, moldura]).then(imgs => {
    let moldura = imgs[1],
        img    = imgs[0];
    moldura.resize(720, 720);   
    img.resize(720, 720)   
    img.composite(moldura, 0, 0).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        if (!err) 
        message.channel.send(new Discord.Attachment(buffer));        
    });
});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tr'],
  permLevel: 0
};

exports.help = {
  name: '<prefix>tr',
  description: 'Etiketlediniz Kişinin Profiline Türkiye Effecti Eklenir.',
  usage: 'tr @User'
};
