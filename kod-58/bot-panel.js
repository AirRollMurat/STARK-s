////Bot Panel
const botStats = {
  guildID: 'SUNUCU ID',
  totalUsersID: 'Toplam Kullanıcı KANAL ID',
  channelCountID: 'Kanal Sayısı Kanal ID',
  serverCountID: 'Sunucu Sayısı Kanal ID'
};
client.on('ready', async(message,member,guild) => {
  client.setInterval(() => {
 if (!client.guilds.get(botStats.guildID)) return;
client.channels.get(botStats.totalUsersID).setName(`Toplam Kullanıcı : ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`);
client.channels.get(botStats.serverCountID).setName(`Sunucu Sayısı : ${client.guilds.size.toLocaleString()}`);
client.channels.get(botStats.channelCountID).setName(`Kanal Sayısı : ${client.channels.size.toLocaleString()}`);
  }, 5000);
});
////
