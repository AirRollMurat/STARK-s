client.on('guildMemberAdd', member => {
  let stark = client.channels.get(db.fetch(`starkcode_${member.guild.id}`))
  const embed = new Discord.RichEmbed()
  .setTitle(client.users.get(member.id).username)
  .setDescription("Hoşgeldin, seninle birlikte "+member.guild.memberCount+" kişiyiz!")
  .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
  .setFooter("Stark Code",member.guild.iconURL)
  stark.send(embed)
})

client.on('guildMemberRemove', member => {
   let knl = client.channels.get(db.fetch(`starkcode_${member.guild.id}`))
  const embed = new Discord.RichEmbed()
  .setTitle(client.users.get(member.id).username)
  .setDescription("Görüşürüz, sensiz "+member.guild.memberCount+" kişiyiz!")
  .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
  .setFooter("Stark Code",member.guild.iconURL)
  knl.send(embed)
})
