client.on("message", async message => {
    let sayac = db.fetch(`sayac_${message.guild.id}`)
    let sayack = db.fetch(`sayackanal_${message.guild.id}`)
    if (!sayack) return;
    let sayackanal = message.guild.channels.find('name', sayack)
        if(sayac <= message.guild.members.size) {
    sayackanal.send(`:tada: Tebrikler \`${message.guild.name}!\` ${sayac} kullanıcıya başarıyla ulaştık! Sayaç başarıyla sıfırlandı.`)
  //message.guild.owner.send(`Tebrikler! \`${member.guild.name}\` adlı sunucun ${sayac} başarıyla kullanıcıya ulaştı! Sayaç başarıyla sıfırlandı.`)  
            db.delete(`sayac_${message.guild.id}`)
            db.delete(`sayackanal_${message.guild.id}`)
            }
});

client.on("guildMemberAdd", async member => {
       let sayac = db.fetch(`sayac_${member.guild.id}`)
        let sayack = db.fetch(`sayackanal_${member.guild.id}`)
        if (!sayack) return;
        let sayackanal = member.guild.channels.find('name', sayack)

 if (!sayackanal) {
    return;
  }

  try {
    sayackanal.send(`:loudspeaker: :inbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucuya katıldı. \`${sayac}\` kişi olmamıza \`${sayac - member.guild.memberCount}\` kişi kaldı.`);
  } catch (e) { 
    return console.log(e)
  }

});

client.on("guildMemberRemove", async member => {
        let sayac = db.fetch(`sayac_${member.guild.id}`)
        let sayack = db.fetch(`sayackanal_${member.guild.id}`)
        if (!sayack) return;
        let sayackanal = member.guild.channels.find('name', sayack)

  if (!sayackanal) {
    return;
  }

  try {
    sayackanal.send(`:loudspeaker: :outbox_tray: \`${member.user.tag}\` adlı kullanıcı sunucudan ayrıldı. \`${sayac}\` kişi olmamıza \`${sayac - member.guild.memberCount}\` kişi kaldı.`);
  } catch (e) { 
    return console.log(e)
  }

});
