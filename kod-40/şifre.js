const Discord = require('discord.js');
const generator = require('generate-password');


exports.run = function(client, message, args,params) {
    var uzunluk = args.slice(0).join(' ');

    if (!uzunluk) return message.channel.send('<a:h_:591907035553988638> Lütfen oluşturmak istediğiniz şifrenin uzunluğunu sayı biçiminde girin; ``!!şifre 10``')
    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    })
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCode('message',password);
  if (message.channel.type !== 'dm') {
    message.channel.send('<a:a_:591907033721077780> Şifreniz özel mesaj kutunuza gönderildi!') }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
        message.author.sendCode('message',password);
    }
  }





};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'şifre', 
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'şifre <uzunluk>'
};
