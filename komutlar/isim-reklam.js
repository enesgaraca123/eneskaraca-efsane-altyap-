const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {
let ingewikkeld = db.fetch("ce-nickreklam."+message.guild.id)
let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || require('../ayarlar.json').prefix

if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed() .setColor('RED') .setDescription(' Bunun için **UYELERI KICKLER** yetkisine codeming olmalısın. '))
if(!message.guild.members.cache.get(client.user.id).hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed() .setColor('RED') .setDescription(' Bunun için **UYELERI KICKLER** yetkisine codeming olmalısın. '))
  

if(!ingewikkeld) {
let codEmingMete = message.mentions.channels.first()
if(!codEmingMete) return message.channel.send("Bir kanal pingle.")
await db.set("ce-nickreklam."+message.guild.id, codEmingMete.id)
return message.channel.send("CodEming olarak <#"+codEmingMete.id+"> kanalını log kanalı olarak ayarladık.")
}

if(ingewikkeld) {
await db.delete("ce-nickreklam."+message.guild.id)
return message.channel.send(" Codeming olarak sıfırladık bu sıstemi ayarladık.")
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