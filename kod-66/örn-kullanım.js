client.on("ready", async () => {
let guild = client.guilds.get("486115664575201282") //Sunucunun ID'sini yazıyoruz.
let online = guild.members.filter(m => !m.user.bot && m.user.presence.status !== "online").size;
  setInterval(() => {
    client.channels.get("691320340407648276").setTopic(client.sayiemo(`Toplam Üye: ${guild.members.size}\nAktif Üye: ${online}`));// Kanal ID'sini yazıyoruz.
  }, 3000);
});
