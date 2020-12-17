const Discord = require('discord.js')
exports.run = async(client, msg, args) => {

let codemingUser = msg.mentions.users.first() || args[0] || msg.author
client.users.fetch(codemingUser.id || codemingUser).then(ceuser => { Profil(ceuser) })
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