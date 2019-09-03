client.on('roleCreate', async (role, member) => {

 let sChannel = role.guild.channels.find(c => c.name === 'rol-koruma')
    sChannel.send(`**Yeni Bir rol Eklendi ve Koruma Nedeni ile silindi,
Silinen Rol: **${role.name}**
`)
    .then(() => console.log(`${role.name} adlı rol silindi`))
    .catch(console.error); 
role.delete()

});
