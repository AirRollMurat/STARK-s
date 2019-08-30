client.on("message", msg => {

    if (db.fetch(`link_${msg.guild.id}`) === true) {
    var regex = new RegExp(/(discord.gg|http|.gg|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|.xyz|https|facebook|instagram)/)
    
    if (regex.test(msg.content)== true) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
               db.delete(`para_${msg.author.id}`)
         db.add(`linksayi_${msg.author.id}`, +4)
        msg.reply('<a:h_:591907035553988638> ``'+msg.author.username+'`` Dostum, ``'+ msg.guild.name+'`` sunucusunda link engeli bulunmaktadır.O yüzden linkini paylaşamazsın.').then(message => message.delete(5500));
    }
}
    }
})
