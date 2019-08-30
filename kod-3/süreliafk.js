const db = require("quick.db")

exports.run = function(client, message, args) {

  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  if(!REASON) return message.channel.send("AFK olmak için bir sebep belirtin.");
  
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  message.reply("Başarıyla AFK moduna girdin.")
  
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'afk', 
  description: 'Kullanıcııyı afk moduna sokar.',
  usage: 'afk <sebep>'
};
