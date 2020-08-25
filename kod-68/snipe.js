const db = require('quick.db');
const snipes = new db.table('snipes');
const { MessageEmbed } = require('discord.js');

exports.run = function(client, message, args) {
        const embed = new MessageEmbed()
            .setColor('#46D4FC')
            .setFooter('Muratva Stark | Serendia Squad')
            .setAuthor(msg.author.username, msg.author.avatarURL({ dynamic: true }))
            .setTimestamp();

        if (!snipes.get(`servers.${msg.guild.id}.${msg.channel.id}`)) return msg.channel.send(embed.setDescription("**Veri bulunamadı.**"))

        snipes.get(`servers.${msg.guild.id}.${msg.channel.id}`).map((y, index) => {
            embed.setDescription(`${msg.channel.toString()} kanalında en son silinen 5 mesaj;`)
            embed.addField(y.writer, `${y.content ? y.content + " - " : ""}${Time(y.deletedAt)}${y.image ? ` - [Dosya](${y.image})` : ""}`)
        });

        msg.channel.send(embed)
    }
}

exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'snipe'
}
