const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {
let astralbeta = db.fetch("astral-nickreklam."+message.guild.id)
let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || require('../ayarlar.json').prefix

if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed() .setColor('RED') .setDescription(' Bunun için **UYELERI KICKLER** yetkisine olmalısın. '))
if(!message.guild.members.cache.get(client.user.id).hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed() .setColor('RED') .setDescription(' Bunun için **UYELERI KICKLER** yetkisine olmalısın. '))
  

if(!astralbeta) {
let astralcode = message.mentions.channels.first()
if(!astralcode) return message.channel.send("Bir kanal pingle.")
await db.set("astral-nickreklam."+message.guild.id, astralcode.id)
return message.channel.send("AstralCode olarak <#"+astralcode.id+"> kanalını log kanalı olarak ayarladık.")
}

if(astralbeta) {
await db.delete("astral-nickreklam."+message.guild.id)
return message.channel.send(" AstralCode olarak sıfırladık bu sıstemi ayarladık.")
}
}
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [], 
permLevel: 0 
};

exports.help = {
name: 'isim-reklam',
description: '',
usage: ''
}
