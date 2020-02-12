client.on("message", async msg => {
  var chan = client.channels.get('KANAL ID');
  if(!chan) return;
  if(msg.author.id === client.user.id) return;
  if (msg.content && msg.attachments.size > 0) {
  msg.delete();
  chan.send('Lütfen sadece resmi at.').then(x => x.delete(30000));
  }
  if(msg.content){
  msg.delete();
  chan.send('Sadece resim atabilirsin.').then(x => x.delete(30000));
  }
})
