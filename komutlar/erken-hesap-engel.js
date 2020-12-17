const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Bu komutu kullanmak için yeterli yetkiye sahip değilsin.");
  
  let kanal = message.mentions.channels.first()
  let ana_veri = await db.fetch(`codeming_${message.guild.id}`)

  
  if(ana_veri) {
    
message.channel.send('Koruma sistemi ayarladığınız kanal verisi ile birlikte kaldırıldı.')  
    
db.delete(`codeming_${message.guild.id}`)       
    return
  }
 if(!ana_veri) {
   
if(!kanal)  return message.reply(':x: Ayarlama işlemini yapmam için bir kanal belirtin.')

   db.set(`codeming_${message.guild.id}`, kanal.id)
 
   //karrpuz: 🍉 
 message.channel.send('🍉 erken açılmış hesaplara ceza sistemi **aktif** hale getirildi. \n\n 🍉 Sunucuya gelen üyelerin hesapları en az **1 gün** olmalı. \n\n 🍉 Log kanalını '+kanal+' olarak ayarladım.')  
   
   
 message.guild.owner.send('Erken açılmış hesaplara ceza sistemi artık aktif!')  

 } 

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'erken-hesap-engel',
  description: 'taslak', 
  usage: 'erken-hesap-engel'
}