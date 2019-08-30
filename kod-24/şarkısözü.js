const request = require('request-promise-native');

const api = "2e03af5532b91b920cf00f2f2c5117f8"

exports.run = async (Bastion, message, args) => {
  try {
	    let song = args.slice(0).join(' ');
    if (!song) {

      return message.reply("**Doğru Kullanım**: !!lyrics <müzik>")
    }

    let options = {
      headers: {
        'Accept': 'Accept: application/json'
      },
      url: `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&q_track=${encodeURIComponent(song)}&apikey=${api}`,
      json: true
    };
    let response = await request(options);

    if (response.message.header.status_code === 200) {
      message.channel.send({
        embed: {
          color: 0x00AE86,
          title: `${song.toUpperCase()} - Lyrics`,
          description: response.message.body.lyrics.lyrics_body.replace('******* Bu lyrics, ticari kullanım için DEĞİLDİR *******', `Lyricsin tamamını buradan bulabilirsin: [musixmatch.com](${response.message.body.lyrics.backlink_url} 'Musixmatch')`),
          footer: {
            text: `Müzik Dili: ${response.message.body.lyrics.lyrics_language_description}`
          }
        }
      }).catch(e => {
        console.log(e);
      });
    }
    else if (response.message.header.status_code === 404) {
      message.channel.send({
        embed: {
          color: 0x00AE86,
          title: 'Not Found',
          description: `**${song.toUpperCase()}** adında bir lyrics bulunamadı.\nEğer şarkı adını doğru yazdığını düşünüyorsan birde sanatçının adını ekleyerek dene.`
        }
      }).catch(e => {
        console.log(e);
      });
    }
  }
  catch (e) {
    if (e.response) {
      return Bastion.emit('error', e.response.statusCode, e.response.statusMessage, message.channel);
    }
    console.log(e);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'lyrics',
  description: 'Belirtilen müziğin lyricsini gönderir.',
  usage: 'lyrics <müzik>'
};
