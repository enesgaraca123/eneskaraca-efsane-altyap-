// CodEming https://discord.gg/vArAPfK
const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {
    let pingembed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`Test Ediliyor......`)
        .setTimestamp()
    const message = msg
    const m = await msg.channel.send(pingembed);
    let embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .addField(`Mesaj Gecikme Süresi`, `${m.createdTimestamp - msg.createdTimestamp}ms`, true)
        .addField(`Bot Gecikme Süresi`, `${Math.round(client.ping)}ms`, true)
        .setAuthor(client.user.username, client.user.avatarURL)
    m.edit({ embed });
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ping"],
  permLevel: 0
};

module.exports.help = {
  name: 'ping',
  description: '',
  usage: 'ping'
};