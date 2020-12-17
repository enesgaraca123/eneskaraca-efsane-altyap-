const Discord = require('discord.js') ///modulumuzu tanittik
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
  let kanal = client.channels.cache.get(db.fetch(`ökanal_${message.guild.id}`))
    let p = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  let öneri = args.slice(0).join(" ")
if(!kanal) return message.channel.send('<:thumbsup:700453199890350122> Önerilog kanalı ayarlanmamış. Lütfen ayarlamak için `'+p+'önerilog #kanal` komutunu kullanın.')
    if(!öneri) return message.reply("<:thumbsup:700453199890350122> Önerini yaz lütfen. ")
  if(öneri.length > 300) return message.reply('<:thumbsup:700453199890350122> Önerin `300` karakterden fazla olamaz.')
  if(öneri.length < 10) return message.reply('<:thumbsup:700453199890350122> Önerin `10` karakterden az olamaz.')
  let user = message.mentions.users.first()
if(user) return message.reply('<:thumbsup:700453199890350122> Öneri komudunda kimseyi etiketleyemezsin') 
                
  message.channel.send('<:thumbsup:700453177987825724> Önerin log kanalına iletildi. ') 
  let codeming = new Discord.MessageEmbed()
  .setThumbnail( message.author.avatarURL )
  .setFooter( message.author.username , client.user.avatarURL )
  .setTitle(' ⚡ | Yeni Öneri! ')
  .setDescription(`Öneren Kişi : ${message.author} ( ${message.author.id}) \n Önerisi : **${öneri}** `)
  kanal.send(codeming)

}

exports.conf = {
enabled: true, ///kodu aktif ettik///
guildOnly: false, /// sunucuya özel olmadıgını söyledik ///
aliases: [], ///başka bir kullanım eklemedik 
permlevel: 0 ///tüm herkes kullanabilir dedik

}
exports.help =
{
name : "öneri",
despricton : "Öneri verirsiniz.",
usage : "öneri"
}