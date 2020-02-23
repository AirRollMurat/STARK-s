exports.run = (client, message, args) => {
  const muratva = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: muratva
  }).then(stark => message.channel.bulkDelete(stark));
};

exports.conf = {
  aliases: ["temizle"],
  permLevel: 2
};

exports.help = {
  name: 'sil'
};
