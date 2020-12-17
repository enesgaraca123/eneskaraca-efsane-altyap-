const Discord = require('discord.js')
const codeming = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  client.user.setPresence({ activity: { name: `${codeming.prefix}yardım | ${client.guilds.cache.size} Sunucu | `}, status: 'dnd'})
  message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription('İşlem Başarılı!'))
}

exports.conf = {
    guildOnly:true,
    enabled:true,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: 'güncelle',
    description: '',
    usage: ''
}