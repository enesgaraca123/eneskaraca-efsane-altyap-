const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async function(client, message, args) {
   
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(" Quinzel | Yardım Menüsü \n\n 🎉   Basarsanız Eğlence Komutlarını Görürsünüz \n\n 👤 Basarsanız Genel/Kullanıcı Kodlarını Görürsünüz \n\n 🚫 Basarsanız Yetkili Komutlarını Görürsünüz"))
.then(async function(maximusboys) {
        const emojiler = ["🎉", "👤", "🚫", "🔒"];
        const filter = (reaction) =>
          emojiler.includes(reaction.emoji.name)
        await maximusboys.react(emojiler[0]).catch(function() {});
        await maximusboys.react(emojiler[1]).catch(function() {});
        await maximusboys.react(emojiler[2]).catch(function() {});
         await maximusboys.react(emojiler[3]).catch(function() {});
              var reactions = maximusboys.createReactionCollector(filter, {
                
        });
 reactions.on("collect", async function (reaction) {
   if(reaction.bot) return;
				if (reaction.emoji.name === "🎉") {  
        const maximusboys = new Discord.MessageEmbed()        
   .setDescription(`🎉${client.user.username} | Eğlence Menüsü🎉`)
        .addField(`q!yazıtura`,`Yazı Tura Oynar.`)
        .addField(`q!tokat @kullanıcı`,`Etiketlediğiniz Kişiyi Tokatlar.`)
        .addField(`q!balıktut`,`Balık Tutar.`)
        .addField(`q!beşlik @kullanıcı`,`Etiketlediğiniz Kişiye Beşlik Çakar.`)
        .addField(`q!efkar`,`Efkar Ölçer.`)
        .addField(`q!ejderha-yazı <yazınız>`,`Yazdığınız Şeye Ejderha Logosu Ekler.`)
        .addField(`q!espri`,`Espri Yapar.`)
        .addField(`q!kaçcm`,`Kaç Cm Olduğunu Gösterir.`)
        .addField(`q!kralol`,`Kral Olursunuz.`)
        .addField(`q!öp @kullanıcı`,`Etiketlediğiniz Kullanıcıyı Öper.`)
         message.channel.send(maximusboys)
        }
    if (reaction.emoji.name === "👤") {          
   const maximusboys= new Discord.MessageEmbed()        
     .setDescription(`👤${client.user.username} | Genel/Kullanıcı Menüsü👤`)
        .addField(`q!avatar @kullanıcı`,`Etiketlediğiniz Kullanıcının Avatarını Gösterir.`)
        .addField(`q!yılbaşı`,`Yılbaşına Ne Kadar Kaldığını Gösterir.`)
        .addField(`q!önerilog #kanal `,`Öneri Kanalını Ayarlar.`)
        .addField(`q!öneri <mesaj>`,`Öneri Log Olmadan Çalışamaz.`)
        .addField(`q!sondepremler`,`Türkiyede Olan Son Depremler Kandili Rasathanesinden Bilgidir.`)
        .addField(`q!ping`,`Botun Pingini Gösterir.`)
        .addField(`q!istastik`,`Botun İstastiklerini Gösterir.`)
        .addField(`q!kullanıcı-bilgi @kullanıcı`,`Kullanıcı Hakkında Bilgiler Gösterir.`)
        .addField(`q!afk <sebep>`,`Afk Moduna Geçer.`)
        .addField(`q!davetlerim`,`Davetlerinizi Gösterir.`)
        .addField(`q!hesapla İşlem`,`Sadece Toplama Çıkarma Olur.`)
        .addField(`q!sunucu`,`Sunucu İstastiklerini Gösterir.`)
        .addField(`q!habbo yazınız`,`Yazdığınız Şeyin Habbo Logosunu Yapar.`)
         message.channel.send(maximusboys)
    }
    if (reaction.emoji.name === "🚫") {          
   const maximusboys = new Discord.MessageEmbed()      
   .setDescription(`🚫${client.user.username} | Yetkili Menüsü🚫`)
        .addField(`q!otorol <ayarla/sıfırla> @rol`,` Otorol Verir.`)
        .addField(`q!sayaç-ayarla #sayaç-kanalı Sayı`,`Sayaç Açar Sunucuda.`)
        .addField(`q!sunucukur`,`Public Sunucusu Kurar.`)
        .addField(`q!sil <sayı>`,`İstediğiniz Sayıda Mesaj Siler.`)
        .addField(`q!isim-reklam`,`İsim Reklam Engeller.`)
        .addField(`q!kick @kullanıcı`,`Etiketlediğiniz Kullanıcıyı Kickler.`)
        .addField(`q!mute @kullanıcı 15saniye Örnek`,`Etiketlediğiniz Kişiyi Susturur.`)
        .addField(`q!nuke`,`Odadaki Tüm Mesajları Siler.`)
        .addField(`q!erken-hesap-engel`,`Erken Açılan Hesaplara Ceza Verir.`)
        .addField(`q!ban`,`Ban Log Ayarlamanız ve Ban Yetkilisi Ayarlamanız Lazım.`)
         message.channel.send(maximusboys)
   }   
})})}
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yardım'
};