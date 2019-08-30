const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    
var SAHİP = message.guild.members.find("id", "470974660264067072");
if(message.member !== SAHİP)return message.channel.send("Bu komutu kullanmak için uygun izniniz yok.");
if(SAHİP) {
      let args = message.content.split(' ').slice(1).join(" ");
    if (!args) return message.channel.send(" Lütfen oynuyor `yazısını` yazınız.")
client.user.setActivity(args);
message.channel.send('Durum '+args+' olarak değiştirildi.');
}


}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'oynuyor',
  description: '',
  usage: ''
};
