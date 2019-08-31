client.on("userUpdate", async(old, nev) => {
  if(old.username !== nev.username) {
  if(!nev.username.includes("⚡") && client.guilds.get("SUNUCU ID").members.get(nev.id).roles.has("ROL ID")) {
     client.guilds.get("SUNUCU ID").members.get(nev.id).removeRole("ROL ID")
     client.channels.get('KANAL ID').send(`**${nev}, "⚡" tagını çıkardığı için BOT İSMİ tarafından <@&ROL ID> rolü alındı!**`)
    } 
     if(nev.username.includes("⚡") && !client.guilds.get("SUNUCU ID").members.get(nev.id).roles.has("ROL ID")) {
      client.channels.get('KANAL ID').send(`**${nev}, "⚡" tagını aldığı için BOT İSMİ tarafından <@&ROL ID> rolü verildi!**`) 
      client.guilds.get("SUNUCU ID").members.get(nev.id).addRole("ROL ID")
     }
  }
  }) 
