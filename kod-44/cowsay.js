const Discord = require("discord.js");
var cowsay = require("cowsay");

exports.run = (client, msg, args) => {

    let text = args.join(" ");

    msg.channel.send("```" + cowsay.say({
        text : text
    }) + "```")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'cowsay',
  description: 'İstediğiniz Şeyi İnek Söylermiş Gibi Yazar.',
  usage: 'cowsay [yazı]'
};
