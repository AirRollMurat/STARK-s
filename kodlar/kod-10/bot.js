client.on("guildMemberAdd", async member => {
  let log = await db.fetch(`otolog_${member.guild.id}`);
  let log2 = member.guild.channels.find('id', log)
  let rol = await db.fetch(`otorol_${member.guild.id}`);
  let otorol = member.guild.roles.find('id', rol);
  if (!log) return;
  if (!log2) return;
  if (!rol) return;
  if (!otorol) return;
  log2.send(`:mega: <:5727_GreenTick:607634966959882250> \`${member.user.tag}\` adlı kullanıcı aramıza katıldı! \`${otorol.name}\` adlı rol başarıyla verildi.`)
  member.addRole(otorol)
});
