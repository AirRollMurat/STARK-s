const Discord = require('discord.js');
const prefix = "!"
exports.run = async (stark, msg, args) => {
     let emoji_isim = args[0]
     let emoji_url = args[1]
if(emoji_isim) { 
  if(!emoji_url) return msg.reply("Emoji dosyasını yükleyin ya da bağlantısını gönderin.\n Yada sadece `"+prefix+"emojio` yazıp bekleyin.")
     msg.guild.createEmoji(emoji_url.content, emoji_isim, null )
     .then(emoji => {
        return msg.channel.send(`\`${emoji.name}\`(${emoji}) adlı emoji başarıyla oluşturuldu`)
     })
     .catch((err) => {
       msg.channel.send(` Bir hata oluştu. Lütfen;\n
- Yazdığınız adın içinde Türkçe bir karakter bulunmadığına,\n
- Sunucuda emoji yüklemek için yer olduğuna,\n 
- Koyduğunuz dosyanın bir resim olduğuna,\n
- Emojinin 256kb boyutundan küçük olduğuna,\n
 emin olun ve tekrar deneyin.`)
     })
}
if(!emoji_isim) {
  await msg.channel.send(` Emojiye koyulacak adı yazın. \nİşlemi iptal etmek içim \`iptal\` yazın.`)
  let a1 = await msg.channel.awaitMessages(x => x.author.id == msg.author.id, {max: 1, time: 30000})
  if (!a1.size) return msg.channel.send('Herhangi bir cevap vermediğiniz için iptal edildi.')
  let a = a1.first()
  if (a.content == 'iptal') return msg.channel.send('İşlem iptal edildi.')
  let isim = a.content

  await msg.channel.send(`Emoji dosyasını yükleyin ya da bağlantısını gönderin. \nİşlemi iptal etmek içim \`iptal\` yazın.`)
  let b1 = await msg.channel.awaitMessages(x => x.author.id == msg.author.id, {max: 1, time: 30000})
  if (!b1.size) return msg.channel.send('Herhangi bir cevap vermediğiniz için iptal edildi.')
  let b = b1.first()
  let url
  if (b.content.length > 0) url = b.content
  else if (b.attachments.first()) url = b.attachments.first().proxyURL
  else return msg.channel.send("Kafam karıştı. Embed falan mı atıyorsun?")
  
  
  await msg.guild.createEmoji(url, isim)
     .then(emoji => {
        return msg.channel.send(`\`${emoji.name}\`(<:${emoji.name}:${emoji.id}>) adlı emoji başarıyla oluşturuldu`)
     }).catch((err) => {
         msg.channel.send(` Bir hata oluştu. Lütfen;\n
- Yazdığınız adın içinde Türkçe bir karakter bulunmadığına,\n
- Sunucuda emoji yüklemek için yer olduğuna,\n 
- Koyduğunuz dosyanın bir resim olduğuna,\n
- Emojinin 256kb boyutundan küçük olduğuna,\n
 emin olun ve tekrar deneyin.`)
       })
  console.log(b.attachments)
  }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3
}

exports.help = {
    name: 'emojio',
    description: 'RaknaX',
    usage: 'STARK'
}
