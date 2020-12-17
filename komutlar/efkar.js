const Discord = require("discord.js");

exports.run = (client, message) => {

const FwhyCode = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**Quinzel* \n**Efkarınız:** **%${FwhyCode}** **Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["efkar"],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "FwhyCode | Efkarınızı ölçer",
  usage: "efkar Ölçer"
};