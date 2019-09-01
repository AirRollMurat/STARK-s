Bazılarınız koddan hata alıyor fakat kod hatalı değil önceden kullandığım bir koddu.Sizde ``send``sorunu oluyorsa bu dbden kaynaklıdır ve
db sürümünüzü güncelleştirmeniz ve ya silip yeniden yüklemeniz lazım.Bir diğer hata ``moment.duration(...)`` bu hatanın çözümü iki tane `require("moment-duration-format");`
bu kodu bot.jsye eklediğiniz kodun ``client..{`` altına ekleyin.Diğer çözüm ise `const gün = moment.(kurulus).format("D")` ile `const gün = moment.(kurulus).format("dddd")`
değişin halen hata alıyorsanız.`send` hatasının yeni çözümü db güncellemek.Bana ulaşın.
