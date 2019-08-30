const Discord = require('discord.js');

exports.run = async (client, message, args) => {
var filtre = m => m.author.id === message.author.id
  
message.channel.send(`\`\`\`js
YARDIM KOMUTLARI:
[1] eğlence \`Eğlence komutlarını gösterir.\`
[2] kullanıcı \`Kullanıcı komutlarını gösterir.\`
[3] yetkili \`Yetkili komutlarını gösterir.\`
[4] ekstra \`Ekstra komutları gösterir.\`

# örn: 1
# komutlar hakkında da yardım alabilirsiniz: !!yardım komutismi
\`\`\``)
                         message.channel.awaitMessages(filtre,{max: 1 ,time: 30000, errors: ["time"]}).then(collected => {
                                if(collected.first().content === "1") {
                                    message.channel.send(`\`\`\`js
EĞLENCE KOMUTLARI:
!!öp \`Belirtilen kullanıcıyı öper.\`
!!efektmesaj \`Belirtilen yazıyı küçültür.\`
!!tr \`Profil resimlerine "TÜRK BAYRAĞI" efekti ekler.\`
!!aze \`Profil resimlerine "AZERİ BAYRAĞI" efekti ekler.\`
!!jumbo \`Belirtiğiniz emojiyi size png/jpg şeklinde verir. örn: !!jumbo :wumpus:\`
!!emojibul \`Yazdığınız isimde bir emojiyi botun bulunduğu tüm sunucularda arar.\`
!!emojiyazı \`Yazdığınız yazıları Discord'un emoji yazılarına dönüştürür.\`
!!ascii \`Yazdığınız yazıyı ASCII formatına dönüştürür.\`
!!ters \`Yazdığınız yazıyı tersine çevirir.\`
!!cowsay \`Yazdığınız yazıyı inek söylüyormuş gibi gösterir.\`
!!mcsunucu \`Belirtilen minecraft sunucusunun bilgilerini gösterir.\`
!!minecraft \`Yazdığınız şeyleri minecraft başarımına dönüştürür.\`
!!hapishane \`Profil resmine hapishane efekti ekler.\`
!!rip \`Profil resimlerine mezar taşı efekti ekler.\`
!!wasted \`Profil resimlerine "WASTED" efekti ekler.\`
!!trigger \`Profil resimlerine "TRİGGERED" efekti ekler.\`
!!kedi \`Rastgele kedi fotoğraflarını gönderir.\`
!!rastgelegif \`Rastgel gif gönderir.\`
!!sor \`Yapay zekaya soru sormanızı sağlar. @Vortex ile de sorabilirsiniz.\`
\`\`\``)                                } else if(collected.first().content === "2") {
                                  message.channel.send(`\`\`\`js
KULLANICI KOMUTLARI:
!!okulsayaç \`Okulların Açılmasına Kalan Gün, Tarih Vb Gösterir.\`
!!yılbaşı \`Yılbaşının Kutlanmasına Kalan Gün, Tarih Vb Gösterir.\`
!!profil \`Belirtilen kullancının ayrıntılı bilgisini gösterir.\`
!!sunucu \`Sunucu bilgisini gösterir.\`
!!matematik \`Belirtilen işlemleri yapar.\`
!!afk \`AFK moduna geçmenizi sağlar.Etiketlendiğinizde kullanıcıya uyarı verir.\`
!!havadurumu \`Belirtilen şehir için hava durumunu gösterir.\`
!!tarih \`Tarihi ve saati gösterir.\`
!!çeviri \`Yazdığınız cümleleri çevirir.\`
!!davet \`Bulunduğu sunucunun davet linkini oluşturur.\`
!!sunucu-davet \`Bulunduğu sunucunun davet linkini oluşturur.\`
!!botbilgi \`Geçerli bot bilgilerini gösterir.\`
!!kurucu \`Bulunduğu sunucunun kurucusunu gösterir.\`
\`\`\``) 
                                } else if(collected.first().content === "3") {
                                    message.channel.send(`\`\`\`js
YETKİLİ KOMUTLARI:
!!güvenlik \`Sunucuya Gelen Kişileri Denetler, "Belirtilen kanalı güvenlik odası yapar".\`
!!sil \`Belirtilen miktarda mesaj siler.\`
!!resimli-giriş-çıkış #kanal \`Belirtilen kanala resimli giriş-çıkış mesajı yazar.\`
!!yazma \`Belirtilen kullanıcının yazmasını engeller.\`
!!yaz \`Belirtilen kullanıcının yazma engelini kaldırır.\`
!!otorol \`Sunucuya giren insanlara/botlara belirtilen rolü verir.\`
!!otorol kapat \`Otomatik rol özelliğini kapatır. \`
!!otorolyazı \`Otomatik rol özelliğinde yazan mesajı ayarlar.\`
!!anket \`60 saniyelik bir anket başlatır.\`
!!çekiliş \`Sunucudan birini rastgele seçer.\`
!!kick \`Belirtilen kullanıcıyı sunucudan atar.\`
!!ban \`Belirtilen kullanıcıyı sunucudan yasaklar.\`
!!pixel \`Belirtilen kullanıcının avatarına belirtilen miktarda pixelleştirir.\`
!!yazdır \`Yazdığınız mesajı bota yazdırır.\`
!!uyar \`Belirtilen kullanıcıyı uyarır.\`
!!duyuru \`Duyuru kanalı ayarlanmışsa o kanala duyuru gönderir.\`
!!link-engel \`Belirli linkleri engeller, "Kullanıcıları Yasakla" yetkisi olanların reklamını engellemez.\`
!!küfür-engel \`Birçok küfürü engeller ve sohbetten siler.Reklam koruması ile aynı şekilde çalışır.\`
!!modlog sıfırla/kapat \`"vkanal","kayıtkanalı" ayarını sıfırlamanıza yarar.\`
\`\`\``)
                                } else if(collected.first().content === "4") {
                                    message.channel.send(`\`\`\`js
EKSTRA KOMUTLAR:
!!bot \`Etiketlenen bot hakkında bilgiler gösterir.\`
!!güncellemeler \`Bota gelen güncelleme listesini gösterir.\`
!!öneri \`Botun sahibine öneri gönderir.\`
!!blog \`Botun blog sitesini gösterir.\`
!!kısaltmalar \`Komutların kısaltılmış haline gösterir.\`
!!discordbots \`Botun discordbots.org'daki profilinin linkini gönderir.\`
!!destekol \`Bota bağış yapabilmek için kullanabileceğiniz siteyi gönderir.\`
!!sunucuayarları \`Botun sunucu üzerindeki ayarlarını kontrol eder.\`
!!qrkod \`İstediğiniz bir yazı/link ile QR kodu oluşturur.\`
!!hastebin \`Hastebin sitesine kodunuzu/yazınızı yükler.\`
\`\`\``)
                                } else if(collected.first().content === "5") {
                                      if(message.author.id !== "470974660264067072") if(message.author.id !== "282453998529806338") return  message.reply(' <:396514815863947266:613039091432423440> Burayı `sadece` yapımcılarım görebilir.')   
                                  message.channel.send(`\`\`\`js
YAPIMCI KOMUTLARI:
!!eval \`Kod denemek için kullanılır.\`
!!reboot \`Botu yeniden başlatır.\`
!!dnd \`Botun durumunu rahatsız etmeyine alır.\`
!!idle \`Botun durumunu boşa alır.\`
!!avatar \`Botun avatarını değiştirir.\`
!!oynuyor \`Botun oynuyorunu değiştirir.\`
!!dblsayı \`Botun Discord Bot List toplam oy sayısını atar.\`
\`\`\``)
                                } else return message.reply('<a:h_:591907035553988638> Yardım almak istediğiniz kategori sayısı geçersiz. Lütfen komutu tekrar yazınız.')
                         })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y','help','komutlar'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  isim: 'Yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
