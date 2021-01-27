const Discord = require("discord.js");

exports.run = (client, message) => {

const AstralCode = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**Quinzel Bot* \n**Efkarınız:** **%${AstralCode}** **Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["efkar"],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "AstralCode | Efkarınızı ölçer",
  usage: "efkar Ölçer"
};
