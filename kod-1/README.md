Bazılarınız koddan hata alıyor fakat kod hatalı değil önceden kullandığım bir koddu.Sizde ``send``sorunu oluyorsa bu dbden kaynaklıdır ve
db sürümünüzü güncelleştirmeniz ve ya silip yeniden yüklemeniz lazım.Bir diğer hata ``moment.duration(...)`` bu hatanın çözümü iki tane `require("moment-duration-format");`
bu kodu bot.jsye eklediğiniz kodun ``client..{`` altına ekleyin.Diğer çözüm ise `const gün = moment.(kurulus).format("D")` ile `const gün = moment.(kurulus).format("dddd")`
değişin halen hata alıyorsanız.Bana ulaşın.
`send` hatasının yeni çözümü db güncellemek.

DB SÜRÜMÜM SON SÜRÜM FAKAT HALEN HATA ALIYORUM?

Cevabı basit bu kodu verdiğim kişilerde genelde olan bir sorun db sanırsam sorunlu güncel gözüküyor fakat hata veriyor bende anlamış değilim ve kodum `kesinlikle` hatalı değildir.
