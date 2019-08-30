client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
require("moment-duration-format");

    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment.duration(kurulus).format("D")   
    var kontrol;
    if (kurulus < 7) kontrol = 'Güvenilir Değil!'
    if (kurulus > 7) kontrol = 'Güvenilir!'

  chan.send('`'+ member.user.tag +'` sunucuya katıldı! Güvenilir mi? **'+ kontrol +'**')
});
