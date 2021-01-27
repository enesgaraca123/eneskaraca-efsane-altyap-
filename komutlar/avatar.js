const Discord = require('discord.js')
exports.run = async(client, msg, args) => {

let astralUser = msg.mentions.users.first() || args[0] || msg.author
client.users.fetch(astralUser.id || astralUser).then(astuser => { Profil(astuser) })
async function Profil(users) {
let embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(users.tag)
.setImage(users.avatarURL({dynamic:true}))
msg.channel.send(embed)
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pp','profil'],
  permLevel: 0
};
exports.help = {
  name: 'avatar',
  description: '',
  usage: ''
};
