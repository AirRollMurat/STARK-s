const db = require('quick.db');
const snipes = new db.table("snipes");

client.on('message', async message => {
    let userSnipes = `servers.${message.guild.id}.${message.channel.id}`;
    if (snipes.get(userSnipes) && snipes.get(userSnipes).length >= 5) {
        snipes.set(userSnipes, snipes.get(userSnipes).filter(x => x.content !== snipes.get(userSnipes).shift().content));
        await snipes.push(userSnipes, {
            writer: `${message.author.tag} (${message.author.id})`,
            content: message.content ? message.content : null,
            deletedAt: Date.now(),
            image: message.attachments.size > 0 ? message.attachments.array()[0].proxyURL : null
        });
        return;
    } else {
        snipes.push(userSnipes, {
            writer: `${message.author.tag} (${message.author.id})`,
            content: message.content ? message.content : null,
            deletedAt: Date.now(),
            image: message.attachments.size > 0 ? message.attachments.array()[0].proxyURL : null
        });
    }
});
