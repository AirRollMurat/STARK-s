client.on("message", async message => {
  
  if(message.author.bot) return;
  if(!message.guild) return;
  if(message.content.includes(`${prefix}afk`)) return;
  
  if(await db.fetch(`afk_${message.author.id}`)) {
        let süre = await db.fetch(`afk_süre_${message.author.id}`);
    let timeObj = ms(Date.now() - süre);
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);
    message.reply("<a:a_:591907033721077780> Başarıyla AFK modundan çıktın."+" ``"+timeObj.days+` gün `+timeObj.hours+` saat `+timeObj.minutes +` dakika `+"`` "+"süre boyunca AFK'tın.");
  }
  
  var USER = message.mentions.users.first();
  if(!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);
  
  if(REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);
//    message.channel.send(`${USER.tag} adlı kullanıcı ${REASON} sebebiyle ```+timeObj.hours+`h`+timeObj.minutes+`m`+timeObj.seconds +`s`+ ```dır AFK.` )
    
    //    message.channel.send(USER.tag+'adlı kullanıcı'+```${REASON}``` +'sebebiyle,'+ ```${timeObj.hours}saat ${timeObj.minutes}dakika ${timeObj.seconds}saniye```+"dir AFK.' ' )
        message.reply("``"+USER.username+"``"+" adlı kullanıcı "+"``"+REASON+"``"+" sebebiyle " +"``"+timeObj.days+` gün `+timeObj.hours+` saat `+timeObj.minutes +` dakika`+"``"+ "'dır AFK.")
  }
});
