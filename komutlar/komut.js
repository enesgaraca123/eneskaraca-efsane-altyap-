const Discord = require('discord.js');

exports.run = async(client, message, args) => {

if (!message.author.permissions.has("KULLANABILECEK YETKI İSMİ")) return message.channel.send("⚠ Bu Komutu Kullana Bilmek için `KULLANABILECEK YETKI İSMİ` Yetkisine Sahip Olmalısın!")

const embed = new Discord.MessageEmbed()

.setColor("MESAJ RENGI INGILIZCE YAZIN")
.setTitle("MESAJ BAŞLIĞINIZ")
.setTimestamp() //Bu Ek Saati'de Yollamaya Yarar
.setDescription("MESAJINIZ | ACIKLAMANIZ")
.setFooter("ALT SATIR BASLIGINIZ")
.setImage("Fotoğraf yada Gifiniz Büyük Gözüksün İstiyorsanız Buraya Linkini Koyun")
.setThumbnail("Fotoğraf yada Gifiniz Sağ Üstte Küçük Gözüksün İstiyorsanız Buraya Linkini Koyun")

message.channel.send(embed)

}

exports.conf = {
enabled: true, //Komutun Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
guildOnly: false, //Komutun Sunucu Dışında Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
aliases: [], //Ekstra Komut Anahtarları Gire Bilirsiniz! ["Anahtar-ismi"] Gibi
permLevel: 0 //Kullanım Seviyelerini Ayarlarsınız 0 Herkes Kullana Bilir Demektir!
};

exports.help = {
name: 'Komutunuzun Kullanım Anahtarı İsmi',
description: 'Komutun Açıklaması',
usage: 'Komutun Kullanım Şekli'
}


///BERK