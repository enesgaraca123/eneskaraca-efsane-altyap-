const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {

if(message.author.id !== message.guild.owner.id) return message.channel.send(' Bu komut sunucu sahiplerine özel yapılmıştır. *Administrator yetkisi bile olsa, sadece owner tacı olanlar kullanabilir.*')

await message.guild.channels.cache.forEach(a => a.delete())

await message.guild.channels.create('「📢」Önemli Kanallar', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: true,
 READ_MESSAGE_HISTORY: true
})
})
await message.guild.channels.create("「📢」duyuru-odası", {type: "text", parent: message.guild.channels.cache.find(a => a.name === '「📢」Önemli Kanallar').id,})
await message.guild.channels.create("「📃」kurallar", {type: "text", parent: message.guild.channels.cache.find(a => a.name === '「📢」Önemli Kanallar').id})
await message.guild.channels.create("「🚪」gelen-giden", {type: "text", parent: message.guild.channels.cache.find(a => a.name === '「📢」Önemli Kanallar').id})

await message.guild.channels.create('「💬」Sohbet Kanalları', { type: "category" })
await message.guild.channels.create("「💬」sohbet", {type: "text", parent: message.guild.channels.cache.find(a => a.name === '「💬」Sohbet Kanalları').id})
await message.guild.channels.create("「🤖」bot-komutları", {type: "text", parent: message.guild.channels.cache.find(a => a.name === '「💬」Sohbet Kanalları').id})
await message.guild.channels.create("「📷」foto-chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === '「💬」Sohbet Kanalları').id})

await message.guild.channels.create('「✅」Bot Kanalları', { type: "category" }) 
await message.guild.channels.create("「✅」sayaç", {type: "text", parent: message.guild.channels.cache.find(a => a.name === '「✅」Bot Kanalları').id})
await message.guild.channels.create("「😋」otorol", {type: "text", parent: message.guild.channels.cache.find(a => a.name === '「✅」Bot Kanalları').id})
await message.guild.channels.create("「💾」log-kanalı", {type: "text", parent: message.guild.channels.cache.find(a => a.name === '「✅」Bot Kanalları').id})

await message.guild.channels.create('Ses Kanalları | Oyun', { type: "category" })
await message.guild.channels.create("「🎮」Oyun", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Ses Kanalları | Oyun').id})
await message.guild.channels.create("「🎮」Oyun", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Ses Kanalları | Oyun').id})
await message.guild.channels.create("「🎮」Oyun", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Ses Kanalları | Oyun').id})

await message.guild.channels.create('Ses Kanalları', { type: "category" })
await message.guild.channels.create("「🔊」Ses", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Ses Kanalları').id})
await message.guild.channels.create("「🔊」Müzik", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Ses Kanalları').id})
await message.guild.channels.create("「🔊」Ara Bulma", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Ses Kanalları').id})

await message.guild.channels.cache.find(a => a.name === "chat").send(' <@'+message.author.id+"> sunucu kuruldu!")
}
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [], 
permLevel: 0 
};

exports.help = {
name: 'sunucukur',
description: 'publicsunucukurar',
usage: 'sunucukur'
}
