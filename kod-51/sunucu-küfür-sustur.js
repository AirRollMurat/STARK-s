const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

  var kanal = '616881620514766853'
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip değilsin!");

  let tomute = message.guild.member(message.mentions.users.first()) 
  if(!tomute) return message.reply("Lütfen küfür eden kişiyi etiketlemelisiniz: ``!!geçici-sustur @STARK`` olarak girmelisiniz.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Hata: Yetki Yetersizliği!");
let muterole = message.guild.roles.find(r => r.name === "Susturuldu(Küfür)");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Susturuldu(Küfür)",
        color: "#ffffff",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  
  let kayırsız = message.guild.roles.find(r => r.name === "Susturuldu(Küfür)");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Susturuldu(Küfür)",
        color: "#ffffff",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutetime = "300000";

  const e1 = new Discord.RichEmbed()
  .setColor('BLACK')
  .setDescription(`<@${tomute.id}> Üyesi \`Küfür\` **Nedeni İle** \`5 Dakika\` __Sunucudan Uzaklaştırıldı.__`)
  .setTimestamp()
  .setFooter(message.author.username,message.author.avatarURL)  
  const e2 = new Discord.RichEmbed()
  .setColor('RED')
  .setDescription(`<@${tomute.id}> Üyesi \`Küfür\` **Nedeni İle** \`5 Dakika\` **Uzaklaştırılması Bitti** __Tekrar Kayıt Edilmesi Gerek__`)
  .setTimestamp()
  .setFooter(message.author.username,message.author.avatarURL)  
  await(tomute.addRole(muterole.id));
      tomute.send(`${message.guild.name} adlı sunucuda 5 dakikalığına uzaklaştırıldınız.`)
      client.channels.get(kanal).send(e1); 
    tomute.removeRoles(tomute.roles).then(console.log).catch(console.error); 


  setTimeout(function(){
    tomute.removeRole(muterole.id);
        tomute.send(`${message.guild.name} adlı sunucuda 5 dakikalığına uzaklaştırılmanız sona erdi.`)
        client.channels.get(kanal).send(e2); 
  }, ms(mutetime));

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'küfür',
  description: 'STARRKKKK',
  usage: 'STARK'
};
