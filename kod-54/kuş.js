const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = async(client, message, args) => {
    let msg = await message.channel.send("Resim aranıyor...");

    let {body} = await superagent 
    .get('https://api.alexflipnote.dev/birb');
    if(!{body}) return message.channel.send("<a:h_:591907035553988638> Bir hata oluştu. Tekrar deneyiniz.")

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription("**"+message.author.username+"**, İşte bir kuş !")
    .setImage(body.file)
    .setTimestamp()
    message.channel.send({embed})

    msg.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['2'],
  permLevel: 0
};

exports.help = {
  name: 'kuş',
  description:'Kuş resimleri atar.',
  usage: '(STARK)!!kuş'
};
