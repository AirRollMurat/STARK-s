const { get } = require("node-superfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, color, prefix) => {
  let user = message.mentions.users.first() || message.author;
  let random = Math.floor(Math.random() * 11);
  const { body } = await get(`https://nekobot.xyz/api/imagegen?type=magik&image=${user.displayAvatarURL}&intensity=${random}`); 
  message.channel.send({file:body.message});
}

exports.conf = {
    aliases: ["STARK"]
} 

exports.help = {
    name: "magik"
}
  
