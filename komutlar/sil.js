const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json")
exports.run = async(client, astral, args) => {

if(!astral.member.permissions.has("MANAGE_MESSAGES")) return astral.reply(" Yeterli yetkiye sahip değilsin!")
  
let msjsayısı = args[0]  
  
if(!msjsayısı) return astral.channel.send("Lütfen doğru bir mesaj sayısı gir.Örnek: `!sil 8000`")  

if(isNaN(msjsayısı)) return astral.channel.send("Lütfen doğru bir mesaj sayısı gir.Örnek: `!sil 8000`")  
 
if(msjsayısı >= 10000) return astral.channel.send("**10.000** sayısından fazla silmen engellendi.!")  

if(msjsayısı < 2) return astral.channel.send("**2** sayısından az silmen engellendi.!")  

if(msjsayısı < 99) {
astral.channel.bulkDelete(msjsayısı)
  
astral.channel.send("**"+msjsayısı+"** adet mesaj silindi!").then(s => s.delete(9000))  
return
} 
  
let sayı = msjsayısı.charAt(0)  

for (sayı = 0; sayı < 5; sayı++) {

astral.channel.bulkDelete(99)  

} 
astral.channel.send("**"+msjsayısı+"** adet mesaj silindi.")  
} 

// astral
exports.conf = {
enabled: true, //Komutun Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
guildOnly: false, //Komutun Sunucu Dışında Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
aliases: [], //Ekstra Komut Anahtarları Gire Bilirsiniz! ["Anahtar-ismi"] Gibi
permLevel: 0 //Kullanım Seviyelerini Ayarlarsınız 0 Herkes Kullana Bilir Demektir!
};

exports.help = {
name: 'sil',
description: 'Komutun Açıklaması',
usage: 'sil'
}
