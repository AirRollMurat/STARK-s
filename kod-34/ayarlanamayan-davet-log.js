const invites = {};


const wait = require('util').promisify(setTimeout);

client.on('ready', () => {

  wait(1000);


  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  
  
 
  member.guild.fetchInvites().then(guildInvites => {
    
    const ei = invites[member.guild.id];
  
    invites[member.guild.id] = guildInvites;
 
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

    const davetçi = client.users.get(invite.inviter.id);
 
    
   const embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setThumbnail(member.user.avatarURL)
   .setDescription(`\`\`${member.user.tag}\`\` **adlı kullanıcı sunucuya katıldı , davet eden kullanıcı:** \`\`${davetçi.tag}\`\` (\`\`${invite.uses}\`\` **adet daveti var**)`)
   member.guild.channels.get('KANAL ID').send(embed)
  })
});
