exports.run = async (client, message, args) => {
    try {
      let invite = await message.channel.createInvite({
        maxAge: args.age * 60,
        maxUses: args.uses
      });
      let user = message.mentions.users.first() || message.author;

      message.channel.send('<@'+user.id+'> ``'+message.guild.name + '`` adlı sunucunun davet linki :'+ ` \`https://discord.gg/${invite.code}\``).catch(e => {
        client.log.error(e);
      });
    }
    catch (e) {
      client.log.error(e);
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucu-davet','davet-oluştur'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'sunucudavet',
    description: 'Bulunduğunuz sunucunun davet linkini atar.',
    usage: 'davet-kur'
  };
