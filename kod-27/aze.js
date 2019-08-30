const Discord = require('discord.js');

exports.run = (client, message, args) => { 
    var Jimp = require("jimp");
    const Discord = require('discord.js');
    let img    = Jimp.read(message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL),
    moldura = Jimp.read("https://i.imgur.com/3CEbrNr.png");
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
  aliases: ['azeri'],
  permLevel: 0
};
exports.help = {
  name: 'aze',
  description: 'Etiketlediniz Kişinin Profiline Azerbaycan Effecti Eklenir.',
  usage: '<prefix>aze [aze]'
};
