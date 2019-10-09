////Sunucu İsim
//Giriş
client.on('guildMemberAdd', member => {
  var t = client.guilds.get(sunucu)
      t.setName(`Stark Code | ‹ ${t.memberCount} kişi ›`);
})
//Çıkış
client.on('guildMemberRemove', member => {
  var t = client.guilds.get(sunucu)
      t.setName(`Stark Code | ‹ ${t.memberCount} kişi ›`);
})
////
