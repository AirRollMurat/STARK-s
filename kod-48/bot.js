const antispam = require("discord-anti-spam-tr");

let spamEngel = JSON.parse(fs.readFileSync("././ayarlar/spamEngelle.json", "utf8"));

client.on("message", msg => {
  if (!msg.guild) return;
  if (!spamEngel[msg.guild.id]) return;
  if (spamEngel[msg.guild.id].spamEngel === 'kapali') return;
    if (spamEngel[msg.guild.id].spamEngel=== 'acik') {

//istediğiniz yere ekleyin bot.js de
antispam(client, {
  uyarmaSınırı: 20, //Uyarılmadan önce aralıkta gönderilmesine izin verilen maksimum mesaj miktarı.
  banlamaSınırı: 20, //Yasaklanmadan önce aralıkta gönderilmesine izin verilen maksimum ileti miktar.
  aralık: 300000, // ms kullanıcılarda zaman miktarı, yasaklanmadan önce aralık değişkeninin maksimumunu gönderebilir.
  // Uyarı mesajı, kullanıcıya hızlı gideceklerini belirten kullanıcıya gönderilir..
   //Yasak mesaj, yasaklanmış kullanıcıyı ,Banlar
  maxSpamUyarı: 20,//Bir kullanıcının uyarılmadan önce bir zaman dilimi içinde gönderebileceği maksimum kopya sayısı
  maxSpamBan: 20, //Bir kullanıcının yasaklanmadan önce bir zaman diliminde gönderebildiği maksimum kopya sayısı
  zaman: 7, // Spamdan sonraki zaman
  rolİsimi: "spam-susturulmuş" // Spam Atan Kullanıcılar Verilecek Röl

});
    }
})
