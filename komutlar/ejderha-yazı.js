const Discord = require("discord.js");

exports.run = (client, message, args) => {

let MaximusBoysCode = args.slice(0).join("+");
if (!MaximusBoysCode) return message.channel.send("Lütfen Bişey Yaz");
let link ="https://dynamic.brandcrowd.com/asset/logo/055241ff-dc4f-4743-90be-1c9caa0c900b/logo?v=4&text=" + MaximusBoysCode;

const Embed = new Discord.MessageEmbed()

.setImage(link);

return message.channel.send(Embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ejderha-yazı",
  description: "Ejderha Logosu Yaparsınız",
  usage: "ejderha <yazı>"
};