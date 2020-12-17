const Discord = require('discord.js') 
const db = require('quick.db')

exports.run = (client, message, args) => {

  
  let miran = args[0]
  
  let kanal = message.mentions.channels.first()
  

  let x;
if(miran === "ayarla") x = "."
if(miran === "sıfırla") x = "."
if(!x) return message.reply('<:thumbsup:700453199890350122> Lütfen **ayarla** veya **sfırla** yaz.')
  
  if(miran === 'ayarla') {
  if(!kanal) message.channel.send("<:thumbsup:700453199890350122> Bir kanal belirtmelisin.")
    db.set(`ökanal_${message.guild.id}`, kanal.id)
    return message.channel.send("<:thumbsup:700453177987825724> Öneri log kanalı başarıyla **" + kanal + "** olarak ayarlandı")
  }
if(miran === 'sıfırla')
 db.delete(`ökanal_${message.guild.id}`)
  return message.channel.send('<:thumbsup:700453177987825724> Önerilog kanalı sıfırlandı. ')

}

exports.conf = {
enabled: true, ///kodu aktif ettik///
guildOnly: false, /// sunucuya özel olmadıgını söyledik ///
aliases: ["öneri-log"], ///başka bir kullanım eklemedik 
permlevel: 4 ///tüm herkes kullanabilir dedik

}
exports.help =
{
name : "önerilog",
despricton : "açıklama",
usage : "önerilog"
}