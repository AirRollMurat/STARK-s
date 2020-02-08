client.on('guildMemberAdd',async member => {
 let user = client.users.get(member.id);
 let id = await db.fetch(`guvenlik${member.guild.id}`);
 let kanal = member.guild.channels.find('id', id)
 let isim = member.displayName.length > 30 ? member.displayName.substring(0, 17) + '...' : member.displayName;
 
 const { loadImage } = require('canvas');
 const { Canvas } = require('canvas-constructor');
 const { get } = require('node-superfetch');
  
  const { body: şüpheli } = await get('https://cdn.discordapp.com/attachments/643157527562813460/675811793896996875/Adsz.png');
	const { body: güvenli } = await get('https://cdn.discordapp.com/attachments/643157527562813460/675811131004026931/Adsz.png');
  const avatar = await loadImage(member.user.displayAvatarURL);

  const tarih = new Date().getTime() - user.createdAt.getTime();
  const gün = moment.duration(tarih).format("D"); 
  
   var inceleme;
    if (tarih > 2629800000) inceleme = güvenli
    if (tarih < 2629800000) inceleme = şüpheli
  
	const resimler = new Canvas(400, 180)
    	.addImage(inceleme, 0,0, 400, 180)
      .addCircularImage(avatar, 85, 90, 64)
      .setTextAlign('center')
      .setTextFont('18pt Klavika Regular')
      .setColor('#FFFFFF')
      .addText(isim, 285, 54)
      .setTextAlign('left')
      .toBuffer();
   
  let embed = new RichEmbed() 
	  .setColor("GREEN") 
	  .setAuthor(`${user.tag}`, user.displayAvatarURL)
	  .attachFile({attachment: resimler, name: 'stark-guvenlik.png'})
	  .setImage('attachment://stark-guvenlik.png') 
	
  kanal.send(embed);  
});
