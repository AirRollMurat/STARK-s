const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args) => {
const fetch = require('node-fetch');
    fetch('https://apis.duncte123.me/seal')
        .then(res => res.json()).then(({ data }) => {
            message.channel.send(new Discord.RichEmbed().setImage(data.file));
});
}

exports.conf = {  
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
    name: "fokbalığı",
    description: "Bir kedi resmi gönderir.",
    usage: "(STARK)fok balığı"
};
