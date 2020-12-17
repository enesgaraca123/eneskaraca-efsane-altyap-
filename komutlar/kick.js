const Discord = require("discord.js");
 const ayarlar = require('../ayarlar.json')
 const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const db = require('quick.db')
exports.run = async (client, message, args) => {
if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(' Üyeleri banla yetkisine sahip olmalısın.')

let EmingUSER = message.mentions.members.first()

let EmingSEBEP = args.slice(1).join(' ') || 'Belirtilmemiş'

if(!EmingUSER) return message.channel.send(' Kicklenecek kişiyi seçmelisin.')

 EmingUSER.kick()

message.channel.send("<@"+EmingUSER.id+"> kişisi <@"+message.author.id+"> isimli yetkili tarafından ``" + EmingSEBEP + "`` sebebiyle kicklendi.")
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: '',
  usage: ''
};