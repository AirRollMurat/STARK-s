const Discord = require('discord.js');

exports.run = function(client, message) {


 message.channel.send('``'+message.guild.name +'`` adlı sunucunun kurucusu; ``'+ message.guild.owner.user.tag +'`` adlı kullanıcıdır.');
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['owner','kurucukim'],
  permLevel: 0 
};

exports.help = {
  name: 'kurucu', 
  description: 'Kurucunun kim olduğunu söyler.',
  usage: 'kurucu'
};
