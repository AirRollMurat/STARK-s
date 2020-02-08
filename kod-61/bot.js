client.on('messageReactionAdd', async (reaction, user) => {
 const message = reaction.message;
 const db = require('quick.db');
 let sahip = await db.get(`sahip_${message.id}`);
 let istek = await db.get(`istek_${message.id}`);
  
  if(message.channel.type === "dm") return;
 var red_emoji = "🟥";
 var kabul_emoji = "🟩";
 var chan = client.channels.get('675393594793656340');

  if (reaction.emoji.name == kabul_emoji) db.add(`evet_${message.id}`, 1)
  if (reaction.emoji.name == red_emoji) db.add(`hayir_${message.id}`, 1)
 var sira = await db.get(`sura_${message.id}`)
 var evet = await db.get(`evet_${message.id}`);
 var hayir = await db.get(`hayir_${message.id}`);
 var edit = await db.get(`edit_${message.id}`);
if(evet >= 3){
   var embed2 = new RichEmbed()
  .setColor("#78ff78")
  .setAuthor("İstek No#"+sira+" [ONAYLANDI]","https://cdn.discordapp.com/attachments/675393594793656340/675456467016351774/Adsz.png")
  .setFooter(client.users.get(sahip).tag,client.users.get(sahip).avatarURL)
  .setDescription(istek)
   var msg = await chan.fetchMessage(edit);
   msg.edit(embed2).then(x => x.clearReactions())
}
if(hayir >= 3){
  var embed3 = new RichEmbed()
  .setColor("#de2a42")
  .setAuthor("İstek No#"+sira+" [REDDEDİLDİ]","https://cdn.discordapp.com/attachments/675393594793656340/675457254274629642/Adsz.png")
  .setFooter(client.users.get(sahip).tag,client.users.get(sahip).avatarURL)
  .setDescription(istek)
   var msg = await chan.fetchMessage(edit);
   msg.edit(embed3).then(x => x.clearReactions())
}
});
