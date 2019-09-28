const Discord = require('discord.js');

const moment = require('moment');
const { version } = require("discord.js");
const os = require('os');
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
require('moment-duration-format');

var ayarlar = require('../ayarlar.json');

exports.run = (bot, message, args) => {
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
        const embedStats = new Discord.RichEmbed()
            .setAuthor(`${bot.user.tag} (`+bot.user.id+`)`, bot.user.avatarURL)
            .setColor('RED')
            .addField("CPU Kullanımı:", `%${percent.toFixed(2)}`,true)
            .addField("RAM Kullanımı:", `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`,true)
                    .addField("Sunucular/Kullanıcılar:", stripIndents`${bot.guilds.size.toLocaleString()} sunucu, ${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcı`,true)
            .addField("Çalışma Süresi:", `${duration}`,true)
                    .addField("Shard:", "``0``",true)//`\`${bot.shard.count}\``,true)
        .addField("DBL Oy Sayısı:","DBL Eklenmedi.",true)
            .addField("Linkler:", "[**Davet Et**](https://discordapp.com/oauth2/authorize/?permissions=8&scope=bot&client_id=618360355269246977) | [**Destek Sunucusu**](https://discord.gg/sMQXxWb)")
        message.channel.send(embedStats)
    });
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['i', 'stats','bot'],
    permLevel: `Yetki gerekmiyor.`
  };
  
  exports.help = {
    name: 'istatistik',
    description: 'Botun istatistiklerini gösterir.',
    usage: 'istatistik'
  };
