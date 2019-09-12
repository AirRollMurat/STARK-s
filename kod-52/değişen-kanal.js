const kanal = ["S", "ST", "STA", "STAR", "STARK", "STAR", "STA", "ST", "S"];

function randy(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on('ready', async(message) => {
  client.setInterval(() => {
      let randInt = randy(0, 9);
      let canal = kanal[randInt];
      let channel = client.channels.get("616881620514766857"); 

      channel.setName(canal);
  }, 5000);
});
