client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
  let mesaj = client.channels.get('630366595172139008') 
  const embed = new Discord.RichEmbed()
  .setColor('RED')
  .setAuthor('Şüpheli Uyarısı',member.user.avatarURL)
  .addField('Banlanan Kişi:',member.user.username)
  .setDescription('Sunucuya 15 Günden Az Bir Sürede Açılan Bir Hesap Giriş Yaptı.')
  const embed2 = new Discord.RichEmbed()
  .setColor('RED')
  .setAuthor('Banlanma',member.user.avatarURL)
  .setDescription(`Selam **${user.username}**, \nHesabın 15 günden az bir süre içerisinde açıldığından dolayı Stark Code sunucusunda banlandı.`)
  const embed3 = new Discord.RichEmbed()
  .setColor('RED')
  .setAuthor('Banlanma',member.user.avatarURL)
  .setDescription('Banlanan kullanıcı:'+user.tag+'\nSebep: **Sunucuya 15 Günden Az Bir Sürede Açılan Bir Hesap Giriş Yaptı.**')
    const t = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(t).format('dddd');  
      if (t < 1296000000)  {
      member.guild.owner.send(embed)
      user.send(embed2)
      member.guild.ban(user,2);
      mesaj.send(embed3)
}else{
    if (t > 1296000000) 
    user.send(`**<@${user.id}>** Stark Code'ye hoşgeldin! \n \`!js\` yazarak, bütün kodları görebilirsin.İyi eğlenceler!`)
}
});
