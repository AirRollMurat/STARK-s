module.exports = {
  name: 'top10',
  run: async(stark, msg, args) => {
    const { table } = require("table");
    const { MessageEmbed } = require("discord.js");
    let sunucular = stark.guilds.cache.array().sort((a, b) => b.memberCount - a.memberCount).slice(0, 10);
    const top = stark.guilds.cache.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
    let stark = [
      ["Sunucu İsmi", "Üye Sayısı"],
    ]
    sunucular.forEach(a => stark.push([a.name, a.memberCount]))
    await msg.channel.send(new MessageEmbed().setColor("BLACK").setDescription(`\`\`\`fix\n${table(stark)}\`\`\``))
};
