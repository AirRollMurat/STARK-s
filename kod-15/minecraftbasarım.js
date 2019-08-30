const Discord = require('discord.js');
const snekfetch = require('snekfetch');

exports.run = (client, msg, args) => {
  let [title, contents] = args.join(" ").split("-");
  if(!contents) {
    [title, contents] = ["Başarım Kazanıldı!", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if(title.length > 22 || contents.length > 22) return msg.edit("Max Length: 22 Characters. Soz.").then(msg.delete.bind(msg), 2000);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>msg.channel.send("", {files:[{attachment: r.body}]}));
  msg.delete();

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mca"]
};

exports.help = {
  name: 'mcödül',
  description: 'Send a Minecraft Achievement image to the channel',
  usage: 'mcödül üst|alt yazılar (üst|alt yerine sadece normal mesaj yazarsanız üst kısımdaki başarım kazanıldı yazısını değişemezsiniz | bu işaret o işe yarıyor)'
};
