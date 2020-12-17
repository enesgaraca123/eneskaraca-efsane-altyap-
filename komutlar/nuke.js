const Discord = require('discord.js');

exports.run = (client, message, args) => {
message.channel.clone().then(CEkanal => {
  let CEposition = message.channel.position;
  CEkanal.setPosition(CEposition);
  message.channel.delete();
});
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
    name: 'nuke',


};