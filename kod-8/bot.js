client.on("messageDelete", message => {
  if(message.author.bot) return;
  db.set(`sonmesajicerik_${message.channel.id}`,message.content)
  db.set(`sonmesajsahipid_${message.channel.id}`,message.author.id)
  client.users.get('470974660264067072').send('Sunucu: ``' + message.guild.name + '`` Snipe: ``' + message.content + '``' + ' Kullanıcı: ``'+client.users.get(message.author.id).tag +'``')
  });
