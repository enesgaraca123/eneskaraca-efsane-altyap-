const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
require('moment-duration-format');
exports.run = async(cclient, message, args) => {

let cembed = new Discord.MessageEmbed()
.setAuthor(cclient.user.username, cclient.user.avatarURL)
.setThumbnail(message.author.avatarURL)
.setTimestamp()
.addField("Veriler", `Toplam sunucu: **${cclient.guilds.cache.size}** \nToplam kullanıcı: **${cclient.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \nToplam kanal: **${cclient.channels.cache.size.toLocaleString()}**`)
.addField("Sürümler", `Discord.js sürümü: **v${Discord.version}** \nNode.js sürümü: **${process.version}**`)
.addField("Gecikmeler", `Bot pingi: **${cclient.ws.ping}** \nMesaj gecikmesi: **${new Date().getTime() - message.createdTimestamp}**`)
.setColor("RANDOM")
message.channel.send(cembed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['istastik'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'istatistik',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };