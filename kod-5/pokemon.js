const Discord = require("discord.js");
var Jimp = require('jimp');
exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
  
  	if (args[0] === '1') {
        var user = message.mentions.users.first() || message.author;

        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.discordapp.com/attachments/591299755976425493/612232816020946944/awwh.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance1/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance1/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
  	if (args[0] === '2') {
        var user = message.mentions.users.first() || message.author;
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.discordapp.com/attachments/591299755976425493/612232817526702110/charmender.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance2/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance2/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
  	if (args[0] === '3') {
        var user = message.mentions.users.first() || message.author;
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.discordapp.com/attachments/591299755976425493/612232819279790080/cie.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance3/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance3/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '4') {
          var user = message.mentions.users.first() || message.author;
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.discordapp.com/attachments/591299755976425493/612232820542144512/duklett.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance4/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance4/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '5') {
          var user = message.mentions.users.first() || message.author;
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.discordapp.com/attachments/591299755976425493/612232822689759256/espeon.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance5/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance5/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '6') {
          var user = message.mentions.users.first() || message.author;
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.discordapp.com/attachments/591299755976425493/612232824073879553/gyarados.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance6/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance6/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '7') {
          var user = message.mentions.users.first() || message.author;
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.discordapp.com/attachments/591299755976425493/612232825986613270/mine.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance7/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance7/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '8') {
          var user = message.mentions.users.first() || message.author;
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.discordapp.com/attachments/591299755976425493/612232827618197505/squirtle.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance8/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance8/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '9') {
          var user = message.mentions.users.first() || message.author;
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.discordapp.com/attachments/591299755976425493/612232833796145192/togepi.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance9/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance9/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
} 
      	if (args[0] === '10') {
          var user = message.mentions.users.first() || message.author;
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.discordapp.com/attachments/591299755976425493/612232834756902913/yay.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance8/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance8/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
  
    if (!args[0]) return message.reply('Lütfen istediğiniz pokemon çerçevesini belirtin.Not: 10 tane çerçeve bulunmaktadır. `!!pokemon 6`');
    if (args[0] < 1) return message.reply('Lütfen istediğiniz pokemon çerçevesini belirtin.Not: 10 tane çerçeve bulunmaktadır. `!!pokemon 6`');
    if (args[0] > 10) return message.reply('Lütfen istediğiniz pokemon çerçevesini belirtin.Not: 10 tane çerçeve bulunmaktadır. `!!pokemon 6`');
    if (isNaN(args[0])) return message.reply('Lütfen istediğiniz pokemon çerçevesini belirtin.Not: 10 tane çerçeve bulunmaktadır. `!!pokemon 6`');
  
  
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    kategori: "eğlence"
  };
  
  exports.help = {
    name: 'pokemon',
    description: 'Avatariniza Pokemon Efekti Ekler.',
    usage: 'balance <rakam>'
  };
