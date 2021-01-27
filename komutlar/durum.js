const Discord = require('discord.js')
const AstralCode = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  client.user.setPresence({ activity: { name: `${AstralCode.prefix}yardım | ${client.guilds.cache.size} Sunucu | ${client.users.cache.size}Kullanıcı `}, status: 'dnd'})
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
