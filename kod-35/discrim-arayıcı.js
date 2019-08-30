const Discord = require('discord.js');
const fs = require('fs');


exports.run = async (client, msg, args) => {
  if(args[0].length > 4) return msg.channel.send('Discrimler 4 basamaklı olur')
  const s = [`asd1`, `asd2`, `asd3`]
  	const discrim = args[0] || msg.author.discriminator;
        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.tag);
        if (users < 1) {
            let embed = {
                color: 'RANDOM',
                description: `${discrim} bulunamadı!`,
              };
            return msg.channel.send({embed});
        } else {
       
           msg.channel.send(`

${users.join('\n')}


`, {split: true, code: "md"})

          
}}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: [],
		permLevel: 0,
    kategori: "kullanıcı",
	};
	  
	exports.help = {
		name: 'discrim',
		description: 'İstediğiniz bir discrimi botun ekli olduğu sunucularda arar',
		usage: 'discrim',
    
	};
